import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Sign in</h1>
      <Button>
        <Link href="/">Home</Link>
      </Button>
      <Button>
        <Link href="/register">Register</Link>
      </Button>
    </div>
  );
}
