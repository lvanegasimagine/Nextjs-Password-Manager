import { Folder, KeyRound } from 'lucide-react'
import { type DataHeaderMainItemProps } from './HeaderMain.type'

export const DataHeaderMain: DataHeaderMainItemProps[] = [
  {
    icon: KeyRound,
    text: 'Elemento',
    typeElement: 'password'
  },
  {
    icon: Folder,
    text: 'Carpeta',
    typeElement: 'folder'
  }
]
