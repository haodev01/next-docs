import { ToggleMode } from '@/components/common';
import Link from 'next/link';

export const Header = () => {
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
            <ToggleMode />
          </div>
        </div>
      </div>
    </header>
  );
};
