import { Logo } from '@/components/shared/Logo'
import React from 'react'

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="h-full">
      <div className="flex items-center justify-between bg-blue-800 px-6 py-3 lg:hidden">
        <div className="py-1 text-white">
          <Logo />
        </div>
        <div>SidebarMobile</div>
      </div>
      <div className="flex h-full">
        <div className='max-w-lg hidden lg:flex h-full w-72 flex-col fixed bg-blue-800 px-4 text-white'>
            <p>Sidebar...</p>
        </div>
        <div className="w-full lg:pl-72">
            <div className='p-6'>{children}</div>
        </div>
      </div>
    </main>
  )
}

export default HomeLayout
