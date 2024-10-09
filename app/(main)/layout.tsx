import { auth } from '@/auth';
import { Header } from '@/components/blocks';
import { User } from '@/types';
import React from 'react';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      <Header user={user as User} />
      <div className="container mx-auto mt-10">{children}</div>
    </div>
  );
}
