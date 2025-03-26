import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { organization, useSession } from '~/lib/getBetterAuthRequestClient';
import { ProgressSteps } from '../components/ui/progress-steps';
import { useIsMobile } from '../hooks/use-mobile';
import OrgInfo from '../components/CreateOrg/OrgInfo';
import OrgDetails from '../components/CreateOrg/OrgDetails';
import OrgInvite from '../components/CreateOrg/OrgInvite';
import { Invitee } from '../components/ui/organization-invite';
import OrgPayment from '../components/CreateOrg/OrgPayment';

export const Route = createFileRoute('/create-organization')({
  component: CreateOrganization,
});

function CreateOrganization() {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [seatSize, setSeatSize] = useState('');
  const [invitees, setInvitees] = useState<Invitee[]>([])
  const [selectedPlan, setSelectedPlan] = useState<string>("pro")
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const isMobile = useIsMobile()

  const steps = [
    { id: 1, label: "Company Info" },
    { id: 2, label: "Details" },
    { id: 3, label: "Invite" },
    { id: 4, label: "Payment" },
  ]


  const user = useSession().data?.user;

  const handleSubmit = async (e: React.FormEvent) => {
    if (!user) {
      toast.error('You must be logged in to create an organization.');
      return;
    }
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would call an API to create the organization
      console.log('Creating organization:', name, description);
      const { data } = await organization.create({
        name,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        metadata: {
          description,
        },
        userId: user?.id,
      });

      console.log('Organization created:', data);

      toast.success('Organization created successfully!');
      navigate({
        to: '/chat',
        viewTransition: true,
      });
    } catch (error) {
      toast.error('Failed to create organization. Please try again.');
      console.error('Organization creation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextStep = () => {
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

      case 2:
        return <OrgDetails seatSize={seatSize} setSeatSize={setSeatSize} />

      case 3:
        return <OrgInvite invitees={invitees} setInvitees={setInvitees} />

      case 4:
        return <OrgPayment invitees={invitees} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setCurrentStep={setCurrentStep} />

      default:
        return <OrgInfo name={name} setName={setName} description={description} setDescription={setDescription} />
    }
  }
  return (
    <div className="flex flex-col min-h-screen items-center bg-gradient-to-b from-background to-muted/30 p-4">
      <div className='w-2/3 mt-10'>
        <ProgressSteps currentStep={currentStep} steps={steps} onStepClick={(id) => setCurrentStep(id as number)} showLabels={isMobile ? false : true} />
      </div>
      <div className='flex items-center  justify-center w-full mt-10'>
        {handleStepChange(currentStep)}
      </div>

      {
        <div className='w-1/5 flex justify-around gap-x-4 mt-10'>
          <Button className='w-full hover:cursor-pointer' onClick={handlePrevStep}>← Go Back</Button>
          <Button onClick={handleNextStep} className="w-full hover:cursor-pointer" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Next →'}
          </Button>
        </div>
      }
    </div>
  );
}

export default CreateOrganization;
