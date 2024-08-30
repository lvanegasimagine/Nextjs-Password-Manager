"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CopyClipboard } from "@/lib/copyClipboard"
import { Copy, Shuffle } from "lucide-react"
import React, { useEffect, useState } from "react"
import { PasswordGenerator } from "./PasswordGenerator"
import { UserGenerator } from "./UserGenerator"
import { generateCustomPassword } from "@/lib/generateCustomPassword"
import { generateRandomUsername } from "@/lib/generateRandomUser"

export const FormGenerator = () => {
  const [itemValueInput, setItemValueInput] = React.useState("")
  const [selectedValue, setSelectedValue] = React.useState<
  "password" | "user" | string
  >("password")
  const [userTypeSelected, setUserTypeSelected] = React.useState("username")
  const [lengthPassword, setLengthPassword] = useState(11)
  const [isMayusSelected, setIsMayusSelected] = useState(true)
  const [isMinusSelected, setIsMinusSelected] = useState(true)
  const [isNumberSelected, setIsNumberSelected] = useState(true)
  const [isSpecialCharacters, setIsSpecialCharacters] = useState(true)

  useEffect(() => {
    if (selectedValue === "password") {
      const newPassword = generateCustomPassword(
        lengthPassword,
        isMayusSelected,
        isMinusSelected,
        isNumberSelected,
        isSpecialCharacters
      )
      setItemValueInput(newPassword)
    }
  }, [lengthPassword, isMayusSelected, isMinusSelected, isNumberSelected, isSpecialCharacters, setSelectedValue])

  useEffect(() => {
    if (selectedValue === 'user') {
      const newUserGenerated = generateRandomUsername()
      setItemValueInput(newUserGenerated)
    }
  }, [selectedValue, userTypeSelected])

  const handleShuffleClick = () => {
    if (selectedValue === "password") {
      const newPassword = generateCustomPassword(
        lengthPassword,
        isMayusSelected,
        isMinusSelected,
        isNumberSelected,
        isSpecialCharacters
      )
      setItemValueInput(newPassword)
    } else if (selectedValue === 'user') {
      if (userTypeSelected === 'email') {
        console.log('Email')
      } else {
        const username = generateRandomUsername()
        setItemValueInput(username)
      }
    }
  }

  return (
    <div className="mt-5 max-w-2xl">
      <div className="relative w-full">
        <Input
          placeholder="input..."
          value={itemValueInput}
          onChange={(e) => {
            setItemValueInput(e.target.value)
          }}
        />
        <Copy
          className="absolute right-12 top-3 h-5 w-5 cursor-pointer"
          onClick={async () => {
            await CopyClipboard(itemValueInput)
          }}
        />
        <Shuffle className="absolute right-2 top-3 h-5 w-5 cursor-pointer" onClick={handleShuffleClick} />
      </div>
      <div className="my-4 rounded-md bg-slate-100 p-4 shadow-md">
        <p className="mb-4 text-slate-500">Que Quieres Generar?</p>
        <RadioGroup
          defaultValue="password"
          onValueChange={(value) => {
            setSelectedValue(value)
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="password" id="r1" />
            <Label htmlFor="r1">Password</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="user" id="r2" />
            <Label htmlFor="r2">Usuario</Label>
          </div>
        </RadioGroup>
      </div>
      {selectedValue === "password"
        ? (
        <PasswordGenerator
          lengthPassword={lengthPassword}
          setLengthPassword={setLengthPassword}
          isMayusSelected={isMayusSelected}
          setIsMayusSelected={setIsMayusSelected}
          isMinusSelected={isMinusSelected}
          setIsMinusSelected={setIsMinusSelected}
          isNumberSelected={isNumberSelected}
          setIsNumberSelected={setIsNumberSelected}
          isSpecialCharacters={isSpecialCharacters}
          setIsSpecialCharacters={setIsSpecialCharacters}
        />
          )
        : (
        <UserGenerator setUserTypeSelected={setUserTypeSelected} />
          )}
    </div>
  )
}
