import React from "react"
import { type PasswordGeneratorProps } from "./PasswordGenerator.types"
import { Checkbox } from "@/components/ui/checkbox"

export function PasswordGenerator({
  setLengthPassword,
  lengthPassword,
  isMayusSelected,
  setIsMayusSelected,
  isMinusSelected,
  setIsMinusSelected,
  isSpecialCharacters,
  setIsSpecialCharacters,
  setIsNumberSelected,
  isNumberSelected
}: PasswordGeneratorProps) {
  console.log("🚀 ~ isMayusSelected:", isMayusSelected)
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLengthPassword(Number(event.target.value))
  }

  return (
    <div>
      <>
        <div className="flex w-full items-center gap-2 rounded-md bg-slate-100 p-4 shadow-md">
          <label
            htmlFor=""
            className="block min-w-32 text-sm font-medium text-gray-700"
          >
            Longitud: {lengthPassword}
          </label>
          <input
            type="range"
            id="range"
            min={8}
            max={50}
            className="h-2 w-full cursor-pointer appearance-none rounded-md bg-gray-200"
            value={lengthPassword}
            onChange={handleRangeChange}
          />
        </div>
        <div className="">
          <div className="my-4 flex items-center space-x-2 rounded-md bg-slate-100 p-4 shadow-md">
            <Checkbox
              id="mayus"
              checked={isMayusSelected}
              onCheckedChange={() => {
                setIsMayusSelected((prev) => !prev)
              }}
            />
            <label htmlFor="mayus" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Mayúsculas A-Z
            </label>
          </div>
          <div className="my-4 flex items-center space-x-2 rounded-md bg-slate-100 p-4 shadow-md">
            <Checkbox
              id="minus"
              checked={isMinusSelected}
              onCheckedChange={() => {
                setIsMinusSelected((prev) => !prev)
              }}
            />
            <label htmlFor="minus" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Minúscula a-z
            </label>
          </div>
          <div className="my-4 flex items-center space-x-2 rounded-md bg-slate-100 p-4 shadow-md">
            <Checkbox
              id="numbers"
              checked={isNumberSelected}
              onCheckedChange={() => {
                setIsNumberSelected((prev) => !prev)
              }}
            />
            <label htmlFor="numbers" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Numeros 0-9
            </label>
          </div>
          <div className="my-4 flex items-center space-x-2 rounded-md bg-slate-100 p-4 shadow-md">
            <Checkbox
              id="special"
              checked={isSpecialCharacters}
              onCheckedChange={() => {
                setIsSpecialCharacters((prev) => !prev)
              }}
            />
            <label htmlFor="special" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Caracteres: &#^$%_:
            </label>
          </div>
        </div>
      </>
    </div>
  )
}
