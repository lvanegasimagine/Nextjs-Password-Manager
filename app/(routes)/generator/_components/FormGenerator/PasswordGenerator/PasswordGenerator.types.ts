import { type Dispatch, type SetStateAction } from "react"

export interface PasswordGeneratorProps {
  setLengthPassword: Dispatch<SetStateAction<number>>
  lengthPassword: number
  isMayusSelected: boolean
  setIsMayusSelected: Dispatch<SetStateAction<boolean>>
  isMinusSelected: boolean
  setIsMinusSelected: Dispatch<SetStateAction<boolean>>
  isSpecialCharacters: boolean
  setIsSpecialCharacters: Dispatch<SetStateAction<boolean>>
  setIsNumberSelected: Dispatch<SetStateAction<boolean>>
  isNumberSelected: boolean
}
