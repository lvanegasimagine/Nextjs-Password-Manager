import { type Element } from '@prisma/client'
import { DataTable } from './Data-Table'
import { columns } from './Columns'

export interface TableDataProps {
  elements: Element[]
}
export const TableData = (props: TableDataProps) => {
  const { elements } = props
  return <div className='py-10'>
    <DataTable columns={columns} data={elements}/>
  </div>
}
