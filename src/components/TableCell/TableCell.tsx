import React from 'react'
import { PARAM_EVENT, PARAM_GARANTEE_TIME, PARAM_PREPAYMENTS, PARAM_PRICE, PARAM_TERM } from '../../variables/paramsConsts'

import './TableCell.scss'

type Props = {
   data: any
   type: string
}
export default function TableCell({ data, type }: Props) {

   switch (type) {
      case PARAM_EVENT:
         if (data === true) {
            return (
               <td>Да</td>
            )
         } else return (
            <td>Нет</td>
         )
      case PARAM_TERM:
      case PARAM_GARANTEE_TIME:
         return (
            <td>{data}</td>
         )
      case PARAM_PREPAYMENTS:
         return (
            <td>{data}%</td>
         )
      case PARAM_PRICE:
         return (
            <td>
               <div>{data.PARAM_ACTUAL_PRICE}</div>
               <div>-{data.PARAM_TAX}</div>
               <div>{data.PARAM_GOARL_PRICE}</div>
            </td>
         )
      default:
         return (<td></td>)

   }



}
