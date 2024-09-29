import { ToggleMode } from '@/components/common';

export const Header = () => {
  return (
    <header className="p-6 border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1>Logo</h1>
          <div>
            <ToggleMode />
          </div>
        </div>
      </div>
    </header>
  );
};
