import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

async function Nav () {

  const session = await getServerSession(options)





  return (
    <header className="bg-gray-600 text-gray-100">
        <nav className='flex justify-between items-center w-full px-10 py-4'>
            <Link href='/'><h1>My site</h1></Link>
            <div className="gap-10 flex">
                <Link href="/">Home</Link>
                <Link href='/create-user'>Create User</Link>
                <Link href='/member'>Member</Link>
                <Link href='/denied'>Denied</Link>
                <Link href='/client-member'>Client Member</Link>
                <Link href='/public-page'>Public</Link>
                { session ? <Link href='/api/auth/signout?callbackUrl=/'>Sign Out</Link> : <Link href='/api/auth/signin'>Sign In</Link>}
            </div>
        </nav>
    </header>
  )
}

export default Nav
