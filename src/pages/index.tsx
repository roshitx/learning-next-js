import Navbar from '@/components/layouts/Navbar';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Belajar Next Js</title>
      </Head>
      <div>
        <div>Hello World</div>
      </div>
    </>
  );
}
