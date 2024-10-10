'use client';

import { ToggleMode } from '@/components/common';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { UserDropdown } from './user-dropdown';
import { Skeleton } from '../ui/skeleton';

export const Header = () => {
  const session = useSession();
  const isLoading = session.status === 'loading';
  const user = session.data?.user;
  return (
    <header className="p-6 border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1>
            <Link href="/">Husky</Link>
          </h1>
          <div className="flex items-center gap-x-10">
            <div className="flex items-center gap-x-6">
              <Link className="hover:text-primary" href="/loading-streaming">
                Loading Streaming
              </Link>
              <Link className="hover:text-primary" href="/product">
                Products
              </Link>
            </div>
            {!isLoading && user && <UserDropdown />}
            {!isLoading && !user && (
              <Button asChild>
                <Link href="/signin">Signin</Link>
              </Button>
            )}
            {isLoading && (
              <div>
                <Skeleton className="h-10 w-14" />
              </div>
            )}
            <ToggleMode />
          </div>
        </div>
      </div>
    </header>
  );
};
