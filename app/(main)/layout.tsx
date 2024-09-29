import { Header } from '@/components/blocks';
import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10">{children}</div>
    </div>
  );
}
