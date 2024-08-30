import React from 'react'
import { type UserGeneratorProps } from './UserGenerator.types'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function UserGenerator({ setUserTypeSelected }: UserGeneratorProps) {
  return (
    <div className='p-4 bg-slate-100 rounded-md shadow-md'>
      <p className='mb-4 text-slate-500'>Que Quieres Generar?</p>
      <RadioGroup defaultValue='username' onValueChange={(value) => { setUserTypeSelected(value) }}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value='username' id='r2'/>
          <Label htmlFor='r2'>Username</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value='email' id='r1'/>
          <Label htmlFor='r1'>Email</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
