import { Button } from '@/components/ui/button';
import Link from 'next/link';

import React from 'react';

export default function Page() {
  return (
    <div>
      <h1>Register</h1>
      <Button>
        <Link href="/">Home</Link>
      </Button>
      <Button>
        <Link href="/signin">Signin</Link>
      </Button>
    </div>
  );
}
