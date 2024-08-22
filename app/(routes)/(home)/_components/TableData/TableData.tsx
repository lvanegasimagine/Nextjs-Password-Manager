// import { type Element } from '@prisma/client'
import { columns } from './Columns'
import { DataTable } from './data-table'

export interface TableDataProps {
  elements: any[]
}
export const TableData = (props: TableDataProps) => {
  const { elements } = props
  return <div className='py-10'>
    <DataTable columns={columns} data={elements}/>
  </div>
}
