import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { FormProfile } from './_components/FormProfile'

const ProfilePage = async () => {
  const session = await getServerSession()

  if (!session?.user?.email) {
    redirect('/')
  }

  const userDb = await db.user.findUnique({
    where: {
      email: session.user.email
    }
  })

  if (!userDb) {
    redirect('/')
  }

  console.log(userDb)

  return (
    <div>
      <h1 className='text-xl'>Account Details</h1>
      <FormProfile user={userDb}/>
    </div>
  )
}

export default ProfilePage
