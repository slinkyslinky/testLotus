import React from 'react'
import './TableHeader.scss'

type Props = {
   name: string,
   id: number,
   number: number,

}

export default function TableHeader({ name, id, number }: Props) {
   return (
      <th className='table-header'>
         <span>Участник №{number}</span>
         <span>{name}</span>
      </th>
   )
}
