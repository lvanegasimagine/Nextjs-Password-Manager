import { toast } from '@/components/ui/use-toast'

export const CopyClipboard = async (value: string) => {
  await navigator.clipboard.writeText(value)
  toast({ title: 'value copied✅' })
}
