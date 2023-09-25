import Link from 'next/link';
export default function profilePage() {
  return (
    <div className='flex'>
      Profile Page
      <Link href={'/'} className='Link'>
        Home page
      </Link>
    </div>
  );
}
