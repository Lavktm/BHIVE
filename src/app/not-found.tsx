import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <section className='m-1 h-screen w-full bg-white p-2 dark:bg-shark'>
      <div className='flex flex-col items-center justify-center text-center text-shark dark:text-white'>
        <RiAlarmWarningFill
          size={60}
          className='drop-shadow-glow animate-flicker text-red-500'
        />
        <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
        <Link href='/' className='my-2 p-2'>
          Back to home
        </Link>
      </div>
    </section>
  );
}
