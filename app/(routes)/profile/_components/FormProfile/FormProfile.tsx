"use client"
import React, { useState } from "react"
import { type FormProfileProps } from "./FormProfile.types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormProfile.form"
import { type z } from "zod"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { UploadButton } from "@/lib/uploadThing"
import { Upload } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import axios from "axios"
import { useRouter } from "next/navigation"

export function FormProfile({ user }: FormProfileProps) {
  const [showUploadPhoto, setShowUploadPhoto] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      profileImage: user.profileImage || "",
      username: user.username || "",
      id: user.id
    }
  })
  const [photoUploaded, setPhotoUploaded] = useState<boolean>(false)
  const router = useRouter()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.patch('/api/profile', values)
      toast({ title: 'Profile Updated! 👌' })

      router.refresh()
      setShowUploadPhoto(false)
      setPhotoUploaded(false)
    } catch (error) {
      toast({ title: 'Something went Wrong!', variant: 'destructive' })
    }
  }
  return (
    <div className="max-w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
                <FormControl>
                  <div className="">
                    <div className="flex items-center gap-2">
                      <Image
                        src={
                          user.profileImage
                            ? user.profileImage
                            : "/images/default-profile.jpg"
                        }
                        alt="Image Profile"
                        width={150}
                        height={150}
                        className="rounded-full object-cover"
                      />
                      <div className="w-[200px]">

                      {showUploadPhoto
                        ? (
                        <UploadButton
                          className="mt-3 rounded-md bg-slate-200 text-slate-800"
                          {...field}
                          endpoint="profileImage"
                          onClientUploadComplete={(res) => {
                            form.setValue("profileImage", res?.[0].url)
                            setPhotoUploaded(true)
                          }}
                          onUploadError={(error: Error) => console.error(error)}
                        />
                          )
                        : (
                        <Button onClick={() => setShowUploadPhoto((prev) => !prev)}>
                          <Upload className="mr-2 h-4 w-4" /> Change Photo
                        </Button>
                          )}
                      </div>
                    </div>
                    {photoUploaded && <p className="text-sm text-slate-500">Photo Updated</p>}
                  </div>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="@email" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
