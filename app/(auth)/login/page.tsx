import React from 'react'
import { ImageAuth } from './_components/ImageAuth'
import { TabsForm } from './_components/TabsForms'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const LoginPage = async () => {
  const session = await getServerSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className="grid h-full max-h-screen overflow-hidden md:grid-cols-2">
      <div className="flex h-full justify-center">
        <div className="flex flex-col items-center justify-center p-6 text-white">
          <h1 className="mb-5 text-center text-2xl text-blue-500">
            Imagine Security
          </h1>
          <h2 className="text-4xl font-medium text-black">Welcome back</h2>
          <p className="mb-6 mt-4 text-center text-sm text-slate-400">
            Welcome back, please enter your credentials.
          </p>
          <TabsForm />
        </div>
      </div>
      <ImageAuth />
    </div>
  )
}

export default LoginPage
