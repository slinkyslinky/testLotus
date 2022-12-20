import React, { useState } from 'react'
import { listOfParams } from '../../variables/listOfParams'
import { data } from '../../variables/members'
import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import Timer from '../Timer/Timer'

import './Table.scss'

export default function Table() {


   const [turn, setTurn] = useState(1)
   const membersNumber = data.length
   console.log("table rendered");


   return (
      <div className="table__wrapper">
         <table className='table'>
            <thead>
               <tr>
                  <th>Ход</th>
                  {data.map(member => <Timer key={member.id} start={5 * 1000} finish={0} memberOrder={data.indexOf(member) + 1} turn={turn} setTurn={setTurn} membersNumber={membersNumber} />)}
               </tr>
               <tr>
                  <th>Параметры и требования</th>
                  {data.map(member => <TableHeader key={member.id} name={member.name} id={member.id} number={data.indexOf(member) + 1} />)}
               </tr>

            </thead>
            <tbody>
               {listOfParams.map(param => <TableRow key={param.id} param={param} data={data} />)}
            </tbody>

         </table>
      </div>

   )
}
