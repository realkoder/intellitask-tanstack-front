import { useNavigate } from '@tanstack/react-router';
import { FullOrganization } from '../../types/better-auth.types';
import {
  getSession,
  organization,
  useActiveOrganization,
  useListOrganizations,
} from '../lib/getBetterAuthRequestClient';
import { useEffect } from 'react';

export function useOrganization() {
  const { data: dataOrganization, error: activeOrganizationError } = useActiveOrganization();
  const activeOrganization = dataOrganization as FullOrganization;
  const { data: organizations } = useListOrganizations();
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeOrganizationError) return;
    changeActiveOrganizationIfAny();
  }, [activeOrganizationError]);

  const changeActiveOrganization = async (organizationId: string, redirectPath?: string) => {
    await organization.setActive({ organizationId });
    await getSession({ query: { disableCookieCache: true } });

    if (redirectPath) {
      navigate({
        to: redirectPath,
      });
    } else {
      navigate({
        reloadDocument: true,
      });
    }
  };

  const changeActiveOrganizationIfAny = async () => {
    if (
      organizations &&
      activeOrganization?.id &&
      organizations.filter((org) => org.id !== activeOrganization.id).length > 0
    ) {
      await changeActiveOrganization(
        organizations.filter((org) => org.id !== activeOrganization.id)[0].id
      );
    } else if (organizations && organizations.length > 0) {
      await changeActiveOrganization(organizations[0].id);
    } else {
      await changeActiveOrganization('');
    }
  };

  return { changeActiveOrganization, activeOrganization, changeActiveOrganizationIfAny };
}
