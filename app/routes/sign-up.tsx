import { createFileRoute, Link, redirect, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { cn } from '~/lib/utils';
import { signIn, emailOtp, signUp } from '~/lib/getBetterAuthRequestClient';
import Seperator from '../components/Seperator';

export const Route = createFileRoute('/sign-up')({
  beforeLoad({ context }) {
    if (context.user) {
      throw redirect({ to: '/chat' })
    }
  },
  component: SignUp,
});

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedEmail = localStorage.getItem("invitationEmail");
      if (storedEmail) {
        setEmail(storedEmail);
        localStorage.removeItem("invitationEmail");
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data: signupData } = await signUp.email({
        email,
        name,
        password
      });

      if (signupData) {
        const { data: emailVerificationData } = await emailOtp.sendVerificationOtp({
          email,
          type: "email-verification"
        });

        if (emailVerificationData?.success) {
          toast.success('Account created successfully!');
          setTimeout(() => {
            navigate({
              to: `/verify-account?email=${email}`,
              viewTransition: true,
              reloadDocument: true
            });
          }, 1000);
        } else {
          toast.error('Account not created - try again');
        }
      } else {
        toast.error('Failed to create account. Please try again or check your credentials.');
      }

    } catch (error) {
      toast.error('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Enter your information to create your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className={cn('w-full gap-2 flex items-center', 'justify-between flex-col')}>
              <Button
                type='button'
                variant="outline"
                className={cn('w-full gap-2 hover:cursor-pointer')}
                onClick={async (e) => {
                  const { data, error } = await signIn.social({
                    provider: 'google',
                    callbackURL: 'http://localhost:3000/create-organization',
                  });

                  console.log('GOOGLE SIGNIN', data, error);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.98em"
                  height="1em"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
                Sign up with Google
              </Button>
            </div>
            <Seperator className='w-[90%]' />
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters long
              </p>
            </div>

          </CardContent>
          <Seperator className='mb-3 w-[80%]' />
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading || name.length === 0 || email.length < 3 || password.length < 7}>
              {isLoading ? 'Creating account...' : 'Create account'}
            </Button>
            <div className="text-center text-sm">
              Already have an account?{' '}
              <Link to="/sign-in" viewTransition className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
            <div className="text-center text-sm">
              Go back?{' '}
              <Link to="/" viewTransition className="text-primary hover:underline">
                Home
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;
