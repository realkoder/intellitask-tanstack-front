import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Input } from '@/components/ui/input';
import { emailOtp, signIn } from "~/lib/getBetterAuthRequestClient";
import { toast } from "sonner";

interface OtpVerifyUserProps {
  emailReqParam: string;
}

const OtpVerifyUser = ({ emailReqParam }: OtpVerifyUserProps) => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(emailReqParam);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isInputsValid = otp.length === 6 && /^\d{6}$/.test(otp) && email.length > 3 && password.length > 7;
  const navigate = useNavigate();

  const handleOtpVerification = async () => {
    setIsLoading(true);
    const { data: verifyData } = await emailOtp.verifyEmail({
      email,
      otp,
    });

    if (verifyData?.user.id) {
      const { data: userData } = await signIn.email({ email, password, rememberMe: true });

      if (userData?.user.id) {
        toast.info("You have been verified");

        setTimeout(() => navigate({ to: "/chat" }), 1000);

      } else {
        toast.info("You have been verified - sign in");
        setTimeout(() => navigate({ to: "/sign-in" }), 1000);
      }
    } else {
      toast.info("Something went wrong - try verifying again");
    }

    setIsLoading(false);
  }

  return (
    <div className="flex flex-col items-center mt-20 text-center text-sm ">
      <div className="flex flex-col sm:w-[40%] w-full items-center gap-y-2 mb-6">
        <h3 >You must be verified to create an organization.</h3>
        <p className="text-gray-500">Please verify your account to proceed.</p>
      </div>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Verification Required</CardTitle>
          <CardDescription>Please enter the 6-character code sent to your email</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
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
        </CardContent>
        <CardContent className="flex flex-col items-center text-left">
          <div className="space-y-2">
            <CardTitle>Email</CardTitle>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              required
            />
          </div>
        </CardContent>

        <CardContent className="flex flex-col items-center text-left">
          <div className="space-y-2">
            <CardTitle>Your password</CardTitle>
            <Input
              id="password"
              type="password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col">
          <div className="flex justify-center gap-x-6">
            <Button disabled={isLoading || !isInputsValid} onClick={() => handleOtpVerification()}>{isLoading ? "Verifying..." : !isInputsValid ? "Verify" : "Verify"}</Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Cancel
            </Button>
          </div>
          <div className="mt-6 mb-2">
            <span className="text-gray-500">Don&apos;t have an account?{' '}</span>
            <Link to="/sign-up" className="text-primary hover:underline ml-0.5">
              Sign up
            </Link>
          </div>
          <div>
            <span className="text-gray-500">Already verified?{' '}</span>
            <Link to="/sign-in" viewTransition className="text-primary hover:underline ml-0.5">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>

    </div>
  );
};

export default OtpVerifyUser;
