import clsx from 'clsx';

import Notifications from './Notifications';
import Image from 'next/image';


const Header = async () => {
  return (
    <header
      className='sticky top-0 z-999 flex w-full bg-white'
      id='main-header'
    >
      <div
        className={clsx(
          'flex h-25 flex-grow items-center justify-between gap-4 px-4',
          'xsm:gap-5 xsm:px-10',
        )}
      >
        <Image
          src='/dashboard/images/logo.png'
          alt='Logo Image'
          width={125}
          height={40}
        />
        <Notifications />

      </div>
    </header>
  );
};

export default Header;
