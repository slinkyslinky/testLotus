import React from 'react'
import { Member, Param } from '../../variables/types'
import TableCell from '../TableCell/TableCell'
import './TableRow.scss'

type Props = {
   param: Param,
   data: Member[]

}

export default function TableRow({ param, data }: Props) {

   return (
      <tr>
         <th>{param.name}</th>
         {data.map(member => <TableCell key={member.id} data={member.fields[param.id]} type={param.id} />)}
      </tr>
   )
}
