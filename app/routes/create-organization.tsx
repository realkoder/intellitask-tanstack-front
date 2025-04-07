import { createFileRoute, redirect } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { organization } from '~/lib/getBetterAuthRequestClient';
import { ProgressSteps } from '../components/ui/progress-steps';
import { useIsMobile } from '../hooks/use-mobile';
import OrgInfo from '../components/CreateOrg/OrgInfo';
import OrgInvite from '../components/CreateOrg/OrgInvite';

import OrgPayment, { PaymentPlan } from '../components/CreateOrg/OrgPayment';
import Notifications from '../components/Notifications';
import { OrganizationInvitee } from '../../types/better-auth.types';
import { useEventStream } from '../hooks/use-event-stream';
import { useOrganization } from '../hooks/use-organization';

export const Route = createFileRoute('/create-organization')({
  head: () => {
    return {
      meta: [
        {
          charSet: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          title: 'IntelliOptima | Create Organization',
        },
        {
          about: ''
        }
      ],
    }
  },
  beforeLoad({ context }) {
    if (!context.user) {
      throw redirect({ to: '/sign-in' })
    }
  },
  component: CreateOrganization,
});

const steps = [
  { id: 1, label: "Organisation Info" },
  // { id: 2, label: "Details" },
  { id: 2, label: "Details" },
  { id: 3, label: "Invite" },
]

function CreateOrganization() {
  const isMobile = useIsMobile();
  const { userId } = Route.useRouteContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [stepFinishedChecker, setStepFinishedCountChecker] = useState([true, false, false]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [seatSize, setSeatSize] = useState('');
  const [invitees, setInvitees] = useState<OrganizationInvitee[]>([])
  const [paymentPlan, setPaymentPlan] = useState<PaymentPlan>()
  const [isLoading, setIsLoading] = useState(false);
  const finisedSteps = stepFinishedChecker.filter(isStepFinish => isStepFinish).length;
  const isAllStepsFinished = (paymentPlan === "enterprise" && finisedSteps === 2) || finisedSteps >= 2;
  const isInputsValid = isAllStepsFinished && name.length > 1 && name.length <= 50 && description.length > 2 && description.length <= 100 && paymentPlan;
  useEventStream(userId);
  const { changeActiveOrganization } = useOrganization();

  const handleCreateOrganization = async () => {
    setIsLoading(true);

    try {
      const { data } = await organization.create({
        name,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        metadata: {
          description,
        },
        userId: userId,
      });

      if (data?.id) {
        await Promise.all(invitees.map(async (invite) => {
          await organization.inviteMember({
            email: invite.email,
            role: invite.role,
            organizationId: data.id,
          });
        }));
        toast.success('Organization created successfully!');

        setTimeout(async () => await changeActiveOrganization(data.id, "/chat"), 1500);

      } else {
        toast.error('Failed to create organization. Please try again');
      }
    } catch (error) {
      toast.error('Failed to create organization. Please try again.');
      console.error('Organization creation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setStepFinishedCountChecker(cur => {
      cur[currentStep - 1] = true;
      return [...cur];
    });
  }, [currentStep])

  const handleNextStep = () => {
    // enterprises must not invite members - they have to be contacted before that
    if (paymentPlan === "enterprise" && currentStep === 2) return;
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepChange = (id: number) => {
    switch (id) {
      case 1:
        return <OrgInfo name={name} setName={setName} description={description} setDescription={setDescription} />

      // case 2:
      //   return <OrgDetails seatSize={seatSize} setSeatSize={setSeatSize} />

      case 2:
        return <OrgPayment invitees={invitees} paymentPlan={paymentPlan} setPaymentPlan={setPaymentPlan} setCurrentStep={setCurrentStep} />

      case 3:
        return <OrgInvite invitees={invitees} setInvitees={setInvitees} />

      default:
        return <OrgInfo name={name} setName={setName} description={description} setDescription={setDescription} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center bg-gradient-to-b from-background to-muted/30 p-4">
      <div className="absolute top-4 right-4">
        <Notifications />
      </div>
      <>
        <div className='w-2/3 mt-10'>
          <ProgressSteps currentStep={currentStep} paymentPlan={paymentPlan} steps={steps} onStepClick={(id) => setCurrentStep(id as number)} showLabels={isMobile ? false : true} />
        </div>
        <div className='flex items-center justify-center w-full mt-10'>
          {handleStepChange(currentStep)}
        </div>
        <div className='w-1/5 flex justify-around gap-x-4 my-2'>
          <Button className='w-full hover:cursor-pointer' disabled={currentStep === 1} onClick={handlePrevStep}>← Go Back</Button>
          <Button onClick={handleNextStep} className="w-full hover:cursor-pointer" disabled={isLoading || (paymentPlan === "enterprise" && currentStep === 2) || currentStep === 3}>
            {isLoading ? 'Loading...' : 'Next →'}
          </Button>
        </div>
        <Button type='button' disabled={!isInputsValid} onClick={() => handleCreateOrganization()}>Create your organization</Button>
      </>
    </div>
  );
}

export default CreateOrganization;
