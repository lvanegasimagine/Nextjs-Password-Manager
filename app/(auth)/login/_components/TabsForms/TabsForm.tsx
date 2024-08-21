import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LoginForm } from '../LoginForm'
import { RegisterForm } from '../RegisterForm'

export function TabsForm() {
  return (
    <Tabs defaultValue='signin' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='signin'>Sign In</TabsTrigger>
            <TabsTrigger value='signup'>Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value='signin'>
            <Card>
                <CardContent>
                    <LoginForm/>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value='signup'>
            <Card>
                <CardContent>
                    <RegisterForm/>
                </CardContent>
            </Card>
        </TabsContent>
    </Tabs>
  )
}
