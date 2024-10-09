'use client';

import { ToggleMode } from '@/components/common';
import { User } from '@/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface IHeaderProps {
  user?: User;
}
export const Header = (props: IHeaderProps) => {
  const { user } = props;
  return (
    <header className="p-6 border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1>
            <Link href="/">Husky</Link>
          </h1>
          <div className="flex items-center gap-x-10">
            <div>
              <Link href="/loading-streaming">Loading Streaming</Link>
            </div>
            {user?.id ? (
              <Avatar
                onClick={() => {
                  signOut();
                }}
              >
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <Button asChild>
                <Link href="/signin">Signin</Link>
              </Button>
            )}
            <ToggleMode />
          </div>
        </div>
      </div>
    </header>
  );
};
