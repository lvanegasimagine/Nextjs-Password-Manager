import Link from 'next/link'
import React from 'react'

export function Logo() {
  return (
    <Link href={'/'}>
      <h1 className="text-xl font-bold">ImagineSecurity</h1>
    </Link>
  )
}
