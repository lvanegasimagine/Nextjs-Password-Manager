import React from 'react'
import { type DataTableItemsProps } from './DataTableItems.type'
import { DataTable } from './data-table'
import { columns } from './columns'

export const DataTableItems = ({ elements }: DataTableItemsProps) => {
  return (
    <div className='py-10'>
        <DataTable columns={columns} data={elements}/>
    </div>
  )
}
