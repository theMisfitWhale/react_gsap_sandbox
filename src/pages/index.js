import Head from 'next/head';
import { Button } from '../components';
export default function Home() {
  return (
    <div className="min-h-screen flex  flex-col items-center justify-center">
      <Head>
        <title>React-Gsap-SandBox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button />
      </main>
    </div>
  );
}
