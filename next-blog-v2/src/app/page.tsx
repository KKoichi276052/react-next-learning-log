import { Button } from '@nextui-org/button';
import * as actions from '@/actions';
import { auth } from '@/lib/auth';
import Profile from '@/components/Profile';

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div>
        <form action={actions.signIn}>
          <Button type="submit">Sign in</Button>
        </form>

        <form action={actions.signOut}>
          <Button type="submit">Sign out</Button>
        </form>
      </div>

      {session?.user ? (
        <div>
          <p>Signed in as {JSON.stringify(session.user)}</p>
        </div>
      ) : (
        <div>
          <p>Not signed in</p>
        </div>
      )}

      <Profile />
    </>
  );
}
