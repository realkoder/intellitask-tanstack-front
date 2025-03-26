import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/forgot-password')({
  component: ForgotPassword,
});

import { useState } from 'react';

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
import { Mail, ArrowLeft } from 'lucide-react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would call a password reset API
      console.log('Password reset requested for:', email);

      // Simulate API call
      setTimeout(() => {
        setIsSuccess(true);
        toast.success('Password reset link sent! Please check your email.');
      }, 1000);
    } catch (error) {
      toast.error('Failed to send reset link. Please try again.');
      console.error('Password reset error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Reset your password</CardTitle>
          <CardDescription>
            {!isSuccess
              ? "Enter your email and we'll send you a link to reset your password"
              : 'Check your email for a link to reset your password'}
          </CardDescription>
        </CardHeader>

        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending reset link...' : 'Send reset link'}
              </Button>
              <div className="text-center text-sm">
                <Link
                  to="/sign-in"
                  className="inline-flex items-center text-primary hover:underline"
                  viewTransition
                >
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back to sign in
                </Link>
              </div>
            </CardFooter>
          </form>
        ) : (
          <CardContent className="space-y-6">
            <div className="rounded-lg bg-muted p-6 text-center">
              <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
              <p className="text-sm text-muted-foreground">
                We've sent a password reset link to <strong>{email}</strong>. Please check your
                inbox and follow the instructions to reset your password.
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setIsSuccess(false);
                setEmail('');
              }}
            >
              Try another email
            </Button>
            <div className="text-center text-sm">
              <Link
                to="/sign-in"
                className="inline-flex items-center justify-center text-primary hover:underline"
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to sign in
              </Link>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default ForgotPassword;
