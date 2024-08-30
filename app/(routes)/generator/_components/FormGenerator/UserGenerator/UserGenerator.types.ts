import { type Dispatch, type SetStateAction } from "react"

export interface UserGeneratorProps {
  setUserTypeSelected: Dispatch<SetStateAction<string>>
}
