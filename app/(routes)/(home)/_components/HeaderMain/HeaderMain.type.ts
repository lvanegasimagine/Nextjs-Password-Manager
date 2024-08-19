type TypeElement = '' | 'password' | 'folder'

export interface DataHeaderMainItemProps {
  icon: React.ComponentType<{ className?: string }>
  typeElement: TypeElement
  text: string
}
