import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';

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
import { emailOtp } from '~/lib/getBetterAuthRequestClient';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpGenerated, setIsOtpGenerated] = useState(false);
  const isInputsValid = otp.length === 6 && /^\d{6}$/.test(otp) && email.length > 3 && password.length > 7;
  const navigate = useNavigate();

  const handleRequestResetOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {

      const { data, error } = await emailOtp.sendVerificationOtp({
        email,
        type: "forget-password"
      });

      if (data?.success) {
        setIsOtpGenerated(true);
        toast.success('Password reset token sent! Please check your email.');
      }

    } catch (error) {
      toast.error('Failed to send reset link. Please try again.');
      console.error('Password reset error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setIsLoading(true);
    const { data, error } = await emailOtp.resetPassword({
      email,
      otp,
      password
    });

    setIsLoading(false);
    if (data?.success) {
      navigate({
        to: '/sign-in',
        viewTransition: true,
      });
    } else {
      console.error("Error resetting password", error);
      toast.error("Something went wrong");
    };
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Reset your password</CardTitle>
          <CardDescription>
            {!isOtpGenerated
              ? "Enter your email and we'll send you a link to reset your password"
              : 'Check your email for a link to reset your password'}
          </CardDescription>
        </CardHeader>

        {!isOtpGenerated ? (
          <form onSubmit={handleRequestResetOtpSubmit}>
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
                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
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
          <CardContent className="space-y-6 flex flex-col items-center">
            <div className="rounded-lg bg-muted p-6 text-center">
              <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
              <p className="text-sm text-muted-foreground">
                We've sent a password reset token to <strong>{email}</strong>. Please check your
                inbox and get the token to reset your password.
              </p>
            </div>

            <CardDescription>Please enter the 6-character code sent to your email</CardDescription>
            <div className="space-y-2">
              <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="space-y-2">
              <CardTitle>New password</CardTitle>
              <Input
                id="password"
                type="password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <CardDescription>Password must be at least 8 characters long</CardDescription>
            </div>

            <Button
              className="w-full"
              disabled={!isInputsValid || isLoading}
              onClick={() => handleResetPassword()}
            >
              Reset password
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setIsOtpGenerated(false);
                setEmail('');
                setPassword('');
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
