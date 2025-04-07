import { createFileRoute, Link, redirect, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { signIn } from '~/lib/getBetterAuthRequestClient';
import { cn } from '../lib/utils';


export const Route = createFileRoute('/sign-in')({
  beforeLoad({ context }) {
    if (context.user) {
      throw redirect({ to: '/chat' })
    }
  },
  component: SignIn
});

function SignIn() {
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

  const handleGoogleSignin = async () => {
    await signIn.social({
      provider: 'google',
      callbackURL: 'http://localhost:3000/chat',
    });
  }

  const handleEmailSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await signIn.email({
        email,
        password,
        rememberMe: true
      });

      if (data) {
        toast.success('Successfully signed in!');
        navigate({
          to: '/chat',
          reloadDocument: true,
          viewTransition: true,
        });
      } else {
        if (error.status === 403) {
          toast.error('You need to verify your account!');
          setTimeout(() => {
            navigate({
              to: `/verify-account?email=${email}`,
              reloadDocument: true,
              viewTransition: true,
            });
          }, 1000);
        } else {
          toast.error("We could not sign you in - check your credentials");
        }
      }
    } catch (error) {
      toast.error('Failed to sign in. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>Enter your email and password to access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleEmailSignin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  viewTransition
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={cn('w-full gap-2 flex items-center', 'justify-between flex-col')}>
              <Button
                type='button'
                variant="outline"
                className={cn('w-full gap-2 hover:cursor-pointer')}
                onClick={async (e) => handleGoogleSignin()}
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
                Sign in with Google
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link to="/sign-up" className="text-primary hover:underline">
                Sign up
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

export default SignIn;
