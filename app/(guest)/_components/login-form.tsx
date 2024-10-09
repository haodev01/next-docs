'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { InputPassword, InputText } from '@/components/common/form';
import { formLoginSchema } from '@/types';
import { z } from 'zod';
import { signIn } from 'next-auth/react';

export function LoginForm() {
  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: 'johnd',
      password: 'm38rmF$',
    },
  });

  async function onSubmit(values: z.infer<typeof formLoginSchema>) {
    signIn('credentials', {
      ...values,
      redirectTo: '/',
    });
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <InputText
                  label="Username"
                  control={form.control}
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="grid gap-2">
                <InputPassword
                  label="Password"
                  control={form.control}
                  name="password"
                  placeholder="********"
                />
              </div>
              <Button type="submit" className="w-full mt-4">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/" className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
