import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../variables/config'
import { listOfParams } from '../../variables/listOfParams'
import { data } from '../../variables/members'
import { TimerData } from '../../variables/types'
import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import Timer from '../Timer/Timer'

import './Table.scss'

export default function Table() {


   const membersNumber = data.length

   const now = Math.floor(new Date().getTime() / 1000)
   const [timerData, setTimerData] = useState({ turn: 0, finishTime: now })
   const [timerUpdate, setTimerUpdate] = useState({})

   console.log(timerUpdate);

   useEffect(() => {
      fetch(SERVER_URL + "getTimer", {
         method: "GET",
      }).then(response => response.json())
         .then((data: TimerData) => {
            setTimerData({ turn: data.turn, finishTime: data.finishTime })

         })


   }, [timerUpdate])







   return (
      <div className="table__wrapper">
         <table className='table'>
            <thead>
               <tr>
                  <th>Ход</th>
                  {data.map(member => {
                     if ((data.indexOf(member) + 1) === timerData.turn) {
                        console.log('table render ', timerData);

                        return <Timer key={member.id} memberOrder={data.indexOf(member) + 1} turn={timerData.turn} leftTime={timerData.finishTime - now} setTimerUpdate={setTimerUpdate} membersNumber={membersNumber} />
                     } else
                        return <td key={member.id} className='timer timer--closed'></td>
                  })}
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
