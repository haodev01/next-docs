import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Button>
        <Link href="/signin"> Sigin</Link>
      </Button>
      <Button>
        <Link href="/register">Register</Link>
      </Button>
    </div>
  );
}
