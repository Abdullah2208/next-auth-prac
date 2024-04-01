import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <header className="bg-gray-600 text-gray-100">
        <nav className='flex justify-between items-center w-full px-10 py-4'>
            <Link href='/' className='text-red-400'><h1>My site</h1></Link>
            <div className="gap-10 flex">
                <Link href="/">Home</Link>
                <Link href='/create-user'>Create User</Link>
                <Link href='/member'>Member</Link>
                <Link href='/denied'>Denied</Link>
                <Link href='/client-member'>Client Member</Link>
                <Link href='/public-page'>Public</Link>

            </div>
        </nav>
    </header>
  )
}

export default Nav
