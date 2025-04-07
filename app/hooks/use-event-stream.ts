import { useEffect, useRef, useState } from 'react';
import { eventStreamer, types } from '../lib/client';
import getRequestClient from '../lib/getRequestClient';
import { toast } from 'sonner';
import { useOrganization } from './use-organization';
import { useOrganizationInvitation } from './use-organization-invitations';

interface NotificationEvent {
  receiverIds: string[];
  notification: types.SpecificNotificationEvent;
  initializerId: string;
  organizationId: string;
}

export function useEventStream(userId: string) {
  const { changeActiveOrganization, changeActiveOrganizationIfAny } = useOrganization();
  const { refetchInvitations } = useOrganizationInvitation();
  const [isConnecting, setIsConnecting] = useState(false);

  const eventsStream =
    useRef<Awaited<ReturnType<typeof eventStreamer.ServiceClient.prototype.eventsStream>>>(undefined);

  useEffect(() => {
    connect;
    if (isConnecting || !userId || eventsStream.current) return;

    (async () => await connect())();

    return () => {
      if (eventsStream.current) {
        console.log('CLOSING DOWN');
        eventsStream.current.close();
      }
    };
  }, [userId]);

  const connect = async () => {
    if (isConnecting) return;

    // Close existing connection if any
    if (eventsStream.current) {
      eventsStream.current.close();
    }

    setIsConnecting(true);

    try {
      eventsStream.current = await getRequestClient().eventStreamer.eventsStream();

      eventsStream.current.socket.on('close', () => {
        console.log('Socket closed, will attempt to reconnect if needed');
      });

      eventsStream.current.socket.on('open', async () => {
        console.log('EVENTSSTREAM ON OPEN HAPPENED!');
      });

      eventsStream.current.socket.on('message', async (event) => {
        if (event.data) {
          const notificationEvent = JSON.parse(event.data) as NotificationEvent;
          if (notificationEvent.notification) {
            handleEventMessage(notificationEvent);
          }
        }
      });
    } catch (error) {
      console.error('Error connecting to chat:', error);
      setIsConnecting(false);
    }
  };

  const handleEventMessage = async (event: NotificationEvent) => {
    switch (event.notification.notificationType) {
      case 'ORGANIZATION_INVITATION': {
        await handleOrganizationInvitationEvents(event);
        return;
      }
      case 'ORGANIZATION': {
        await handleOrganizationEvents(event);
        return;
      }
      default:
        throw new Error(`Unknown notification type: ${event.notification.notificationType}`);
    }
  };

  const handleOrganizationInvitationEvents = async (event: NotificationEvent) => {
    const orgInvNotification = event.notification as types.OrganizationInvitationNotification;

    switch (orgInvNotification.notificationHandling) {
      case 'ACCEPTED':
        await changeActiveOrganization(event.organizationId);
        toast.info(
          `${orgInvNotification.memberName} accepted your invitation to join ${orgInvNotification.organizationName}.`
        );
        return;
      case 'CANCELED':
        await refetchInvitations();
        toast.info(
          `Your invitation to join ${orgInvNotification.organizationName} has been canceled.`
        );
        return;
      case 'RECEIVED':
        await refetchInvitations();
        toast.info(
          `You have been invited to join ${orgInvNotification.organizationName} by ${orgInvNotification.memberName}.`
        );
        return;
      case 'REJECTED':
        await refetchInvitations();
        toast.info(
          `${orgInvNotification.memberName} rejected to join ${orgInvNotification.organizationName}.`
        );
        return;
      default:
        throw new Error(`Unknown notification type: ${event.notification.notificationType}`);
    }
  };

  const handleOrganizationEvents = async (event: NotificationEvent) => {
    switch (event.notification.notificationHandling) {
      case 'KICKED':
        const orgKickedMemberEvent =
          event.notification as types.OrganizationKickedMemberNotification;
        if (userId === orgKickedMemberEvent.kickedMemberUserId) {
          toast.info(`You have been kicked from ${orgKickedMemberEvent.organizationName}.`);
          setTimeout(() => changeActiveOrganizationIfAny(), 1000);
        }

        return;
      default:
        throw new Error(`Unknown notification type: ${event.notification.notificationType}`);
    }
  };
}
