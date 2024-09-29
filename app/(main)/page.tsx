import { Button } from '@/components/ui/button';
import { ListRoute } from '@/configs';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Button>
        <Link href={ListRoute.SIGNIN}> Sigin</Link>
      </Button>
      <Button>
        <Link href={ListRoute.REGISTER}>Register</Link>
      </Button>
    </div>
  );
}
