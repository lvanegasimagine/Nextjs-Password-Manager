import { DataTableItems } from '@/components/shared/DataTableItems'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const LoginsElementsPage = async () => {
  const session = await getServerSession()

  if (!session?.user?.email) {
    redirect('/')
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user?.email
    },
    include: {
      elements: {
        where: {
          typeElement: 'Inicio de Sesion'
        },
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  })

  if (!user || !user.elements) {
    return redirect('/')
  }

  return (
    <div>
        <h1 className='text-2xl md:text-3xl font-bold text-black tracking-wide'>List Of Logins Elements</h1>
        <DataTableItems elements={user.elements}/>
    </div>
  )
}

export default LoginsElementsPage
