import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { Shell } from "../components/shell";

const Home: NextPage = () => {

  const { data: session } = useSession()

  if (!session) {
    return (
        <>
            Not signed in <br />
            <Link href="/api/auth/signin">
                <a>
                    Sign in
                </a>
            </Link>
        </>
    )
}

  return (
    < >
      <Head>
        <title>BOMer</title>
        <meta name="BOMer" content="simple bill of materials" />
      </Head>
      <Shell>
        <div>
          <h1 className="pb-5 text-lg">Hi {session.user?.name}, welcome to BOMer!</h1>
          <div>
            Go to the <Link href={'/dashboard'}>
              <a className="text-indigo-600 hover:text-indigo-900">
                dashboard
              </a>
            </Link>
          </div>
          <div>
            Check out your <Link href={'/sales'}>
              <a className="text-indigo-600 hover:text-indigo-900">
                sales
              </a>
            </Link>
          </div>
          <div>
            Follow up your <Link href={'/purchases'}>
              <a className="text-indigo-600 hover:text-indigo-900">
                purchases
              </a>
            </Link>
          </div>
        </div>
      </Shell>
    </>
  )
};

export default Home;
