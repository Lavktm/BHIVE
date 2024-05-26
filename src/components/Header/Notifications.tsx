import CallIcon from '~/svg/call.svg';

const Notifications = () => {
  return (
    <li className='relative flex h-10.5 w-10.5 items-center justify-center hover:cursor-pointer border border-primary-yellow rounded'>
      <CallIcon className='h-4.5 w-4.5 text-black dark:text-white' />
    </li>
  );
};

export default Notifications;
