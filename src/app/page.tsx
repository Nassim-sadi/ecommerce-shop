import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex">
      hello World!
      <Link href={"/profile"} className='btn'>Go to profile</Link>
      <Link href={"/signup"} className='btn'>Sign up</Link>
      <Link href={"/login"} className='btn'>Login</Link>
    </main>
  )
}
