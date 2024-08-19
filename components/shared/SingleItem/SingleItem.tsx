import Link from 'next/link'
import { type SingleItemProps } from './SingleItem.types'

export default function SingleItem({
  label,
  icon: Icon,
  href,
  onClick
}: SingleItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 rounded-md p-2 transition-all duration-300 hover:bg-blue-100/20"
    >
      <div className="rounded-md bg-blue-100/20 p-2">
        <Icon size={20} />
      </div>
      {label}
    </Link>
  )
}
