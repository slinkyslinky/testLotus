import React from 'react'
import { PARAM_ACTIONS, PARAM_ACTUAL_PRICE, PARAM_EVENT, PARAM_GARANTEE_TIME, PARAM_GOARL_PRICE, PARAM_PREPAYMENTS, PARAM_PRICE, PARAM_TAX, PARAM_TERM } from '../../variables/paramsConsts'
import { Member, Param } from '../../variables/types'
import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'

import './Table.scss'

export default function Table() {


   const listOfHeaders = ['Params', 'Member 1', "Member 2"]
   const listOfParams: Param[] = [
      {
         name: "Мероприятия",
         id: PARAM_EVENT
      },
      {
         name: "Срок",
         id: PARAM_TERM
      },
      {
         name: "Гарантия",
         id: PARAM_GARANTEE_TIME
      },
      {
         name: "Предоплата",
         id: PARAM_PREPAYMENTS
      },
      {
         name: "Цена",
         id: PARAM_PRICE
      },
      {
         name: "Действия",
         id: PARAM_ACTIONS
      },

   ]

   const goalPrice = 1900000
   const data: Member[] = [
      {
         id: 112, name: "OAO BLA",
         fields: {
            [PARAM_EVENT]: false, [PARAM_TERM]: 80, [PARAM_PREPAYMENTS]: 30, [PARAM_GARANTEE_TIME]: 24, [PARAM_PRICE]: { [PARAM_GOARL_PRICE]: goalPrice, [PARAM_ACTUAL_PRICE]: 2500000, [PARAM_TAX]: 20000 },
            [PARAM_ACTIONS]: ''
         }
      },
      {
         id: 108, name: "OOO LFLF",
         fields: {
            [PARAM_EVENT]: false, [PARAM_TERM]: 70, [PARAM_PREPAYMENTS]: 35, [PARAM_GARANTEE_TIME]: 20, [PARAM_PRICE]: { [PARAM_GOARL_PRICE]: goalPrice, [PARAM_ACTUAL_PRICE]: 2500000, [PARAM_TAX]: 20000 },
            [PARAM_ACTIONS]: ''
         }
      },
   ]

   return (
      <table className='table'>
         <thead>
            <tr><th>Ход</th></tr>
            <tr>
               <th>Параметры</th>
               {data.map(member => <TableHeader key={member.id} name={member.name} id={member.id} number={data.indexOf(member) + 1} />)}
            </tr>

         </thead>
         <tbody>
            {listOfParams.map(param => <TableRow key={param.id} param={param} data={data} />)}
         </tbody>

      </table>
   )
}
