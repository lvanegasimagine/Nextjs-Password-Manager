import { getServerSession } from 'next-auth'
import { HeaderMain } from './_components/HeaderMain'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'

export default async function Home() {
  const session = await getServerSession()

  if (!session?.user?.email) {
    return redirect('/')
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user.email
    },
    include: {
      elements: {
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  })

  if (!user) {
    return redirect('/')
  }
  console.log('🚀 ~ Home ~ session:', user)
  return (
    <div>
      <HeaderMain userId={user.id}/>
    </div>
  )
}
