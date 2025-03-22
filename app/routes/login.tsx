import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
// import { LoginForm } from '../components/login-form';
import { signUp, signIn, useSession } from '~/lib/getBetterAuthRequestClient';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

export default function LoginPage() {
  const token = useSession().data?.session.token;

  const handleSignUp = async () => {
    try {
      const response = await signUp.email({
        email: 'test@gmail.com',
        password: 'password123',
        image: '',
        name: 'Test User',
      });

      console.log('RESPONSE', response);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleSignin = async () => {
    try {
      const response = await signIn.email({
        email: 'test@gmail.com',
        password: 'password123',
      });

      console.log('SIGINININ', response);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleSigninApple = async () => {
    try {
      console.log('OKEOfd');
      const data = await signIn.social({
        provider: 'apple',
        callbackURL: 'https://intellitask-tanstack-front.vercel.app/chat',
      });

      console.log('SIGINININ', data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const googleSignin = async () => {
    const data = await signIn.social({
      provider: 'google',
    });
  };

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        {/* <LoginForm /> */}
        <div>Login here</div>
        <button onClick={() => handleSignUp()}>OPRET MIG</button>
        <button onClick={() => handleSignin()}>LUK MIG IND!!!</button>
        <button onClick={() => handleSigninApple()}>APPLE NU🍏🍎🍏🍎</button>
      </div>
    </div>
  );
}
