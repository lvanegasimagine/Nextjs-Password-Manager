import { FormEditElement } from '@/components/shared/FormEditElement'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const ElementPage = async ({ params }: { params: { elementId: string } }) => {
  const session = await getServerSession()

  if (!session?.user?.email) {
    return redirect('/')
  }

  const element = await db.element.findUnique({
    where: {
      id: params.elementId
    }
  })

  if (!element) {
    redirect('/')
  }

  return (
    <div>
      <h1>Element Page</h1>
      <div>
        <FormEditElement dataElement={element}/>
      </div>
    </div>
  )
}

export default ElementPage
