'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { toast } from '@/components/ui/use-toast'
import { Element } from '@prisma/client'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { type ColumnDef } from '@tanstack/react-table'
import { Copy, MoreHorizontal, Pencil, User } from 'lucide-react'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ColumnProps = Element

export const columns: Array<ColumnDef<ColumnProps>> = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'typeElement',
    header: 'Type Element'
  },
  {
    accessorKey: 'urlWebsite',
    header: 'Url Website'
  },
  {
    accessorKey: 'directory',
    header: 'Directory'
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const password = row.original.password
      const username = row.original.username

      const onEditElement = () => {
        window.location.href = `/element/${row.original.id}`
      }

      const copyItemClipboard = async (item: string, name: string) => {
        await navigator.clipboard.writeText(item)
        toast({ title: `${name} copied ✅` })
      }

      return (
        <div className="flex items-center justify-center gap-2">
          {password && (
            <Copy
              className="h-4 w-4 cursor-pointer"
              onClick={async () => {
                await copyItemClipboard(password, 'Password')
              }}
            />
          )}
          {username && (
            <User
              className="h-5 w-4 cursor-pointer"
              onClick={async () => {
                await copyItemClipboard(username, 'Username')
              }}
            />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'ghost'} className="h-8 w-8 p-0">
                <span className="sr-only">Open Menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={onEditElement} className='cursor-pointer'><Pencil className='mr-4 w-4 h-4'/> Edit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  }
]
