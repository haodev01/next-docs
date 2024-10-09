import { ToggleMode } from '@/components/common';
import { User } from '@/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserDropdown } from './user-dropdown';

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
            <div className="flex items-center gap-x-6">
              <Link className="hover:text-primary" href="/loading-streaming">
                Loading Streaming
              </Link>
              <Link className="hover:text-primary" href="/product">
                Products
              </Link>
            </div>
            {user?.id ? (
              <UserDropdown />
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
