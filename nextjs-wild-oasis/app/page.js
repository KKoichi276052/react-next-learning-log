import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Page() {
  return (
    <>
      <h1>The Wild Oasis</h1>
      <Link href="/cabins">View all cabins</Link>
    </>
  );
}
