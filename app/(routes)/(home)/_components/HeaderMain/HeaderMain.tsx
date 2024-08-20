'use client'
import React, { useState } from 'react'
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { DataHeaderMain } from './HeaderMain.data'
import { FormAddElement } from '../FormAddElement'

export function HeaderMain() {
  const [typeElement, setTypeElement] = useState<'password' | 'folder' | ''>()
  const [openDialog, setOpenDialog] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const closeDialogAndDropdown = () => {
    setOpenDialog(false)
    setOpenDropdown(false)
  }
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold md:text-3xl">
        Todas las cajas fuertes
      </h1>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
          <DropdownMenuTrigger asChild>
            <Button>
              Nueva <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0">
            <DropdownMenuLabel>
              <DialogTrigger asChild>
                <div className="flex flex-col">
                  {DataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                    <Button
                      key={typeElement}
                      className="justify-start"
                      variant={'ghost'}
                      onClick={() => {
                        setTypeElement(typeElement)
                      }}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {text}
                    </Button>
                  ))}
                </div>
              </DialogTrigger>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[825px]">
          <DialogHeader>
            <DialogTitle>Nuevo Elemento</DialogTitle>
          </DialogHeader>
          {typeElement === 'password' && <FormAddElement />}
        </DialogContent>
      </Dialog>
    </div>
  )
}
