'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'
import SidebarRoutes from '../SidebarRoutes/SidebarRoutes'

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
          <Menu color='white'className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent side={'left'} className='bg-blue-800 text-white'>
        <SheetHeader className='text-left'>
          <SheetTitle className='text-white text-pretty'>ImagineSecurity</SheetTitle>
          <SheetDescription className='text-slate-100 pb-4'>Create and manage all of your password</SheetDescription>
        </SheetHeader>
        <SidebarRoutes/>
      </SheetContent>
    </Sheet>
  )
}
