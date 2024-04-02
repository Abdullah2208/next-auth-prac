"use client";

import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

const clientMember = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client-member')
    }
  })
  return (
    <div>
        <h1>Client Memeber Session</h1>
        <p>{session?.user?.name}</p>
        <p>{session?.user?.role}</p>
    </div>
  )
}

export default clientMember
