import { countPasswords } from "@/lib/countPasswords"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import React from "react"
import RepeatedPasswordsChart from "./_components/RepeatedPasswordsChart/RepeatedPasswordsChart"
import ViewsAnalyticsChart from "./_components/ViewsAnalyticsChart/ViewsAnalyticsChart"
import { TrafficDevice } from "./_components/TrafficDevice"

const AnalyticsPage = async () => {
  const session = await getServerSession()

  if (!session?.user?.email) {
    return redirect("/")
  }

  const user = await db.user.findUnique({
    where: {
      email: session.user.email
    },
    include: {
      elements: {
        orderBy: {
          createdAt: "desc"
        }
      }
    }
  })

  if (!user || !user.elements) {
    return redirect("/")
  }

  const { unique, repeated } = countPasswords(user.elements)
  console.log("🚀 ~ AnalyticsPage ~ unique:", unique)
  console.log("🚀 ~ AnalyticsPage ~ repeated:", repeated)

  return (
    <div>
      <div className="mb-4 grid gap-5 md:grid-cols-2">
        <RepeatedPasswordsChart repeated={repeated} unique={unique} />
        <ViewsAnalyticsChart repeated={repeated} unique={unique}/>
      </div>
      <div className="w-full">
        <TrafficDevice />
      </div>
    </div>
  )
}

export default AnalyticsPage
