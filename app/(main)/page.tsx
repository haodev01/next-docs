'use client';

import { Button } from '@/components/ui/button';
import { ListRoute } from '@/configs';
import { useAppSelector } from '@/store/hooks';
import Link from 'next/link';

export default function Home() {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      {JSON.stringify(user)}
      <Button>
        <Link href={ListRoute.SIGNIN}> Sigin</Link>
      </Button>
      <Button>
        <Link href={ListRoute.REGISTER}>Register</Link>
      </Button>
    </div>
  );
}
