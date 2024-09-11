"use client"
import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"
import { type RepeatedPassowrdsChartProps } from './RepeatedPasswordsChart.type'

const RepeatedPasswordsChart = ({ unique, repeated }: RepeatedPassowrdsChartProps) => {
  return (
    <div>RepeatedPasswordsChart</div>
  )
}

export default RepeatedPasswordsChart
