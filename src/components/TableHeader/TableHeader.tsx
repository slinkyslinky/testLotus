import React from 'react'
import './TableHeader.scss'

type Props = {
   name: string,
   number: number,

}

export default function TableHeader({ name, number }: Props) {
   return (
      <th className='table-header'>
         <p className='table-header__member'>Участник №{number}</p>
         <div className="table-header__name">
            <span>{name}</span>
         </div>
      </th>
   )
}
