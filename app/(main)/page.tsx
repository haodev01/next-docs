'use client';

import { BlogItem } from '@/components/common';

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
}
