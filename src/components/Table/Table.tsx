
import React, { useEffect, useState } from 'react'

import { listOfParams } from '../../variables/listOfParams'

import { Config, Member, TimerData } from '../../variables/types'
import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import Timer from '../Timer/Timer'

import './Table.scss'

type Props = {
   config: Config,
   members: Member[]
}

export default function Table({ config, members }: Props) {


   const SERVER_URL = process.env.SERVER_URL || "http://localhost:3001/"
   const [timerData, setTimerData] = useState({ turn: 0, finishTime: new Date().getTime() })
   const [timerUpdate, setTimerUpdate] = useState({})

   useEffect(() => {
      fetch(SERVER_URL + "getTimer", {
         method: "GET",
      })
         .then(response => response.json())
         .then((data: TimerData) => {
            setTimerData({ turn: data.turn, finishTime: data.finishTime })
         })

   }, [timerUpdate])



   const membersList: Member[] = members.filter((member) => config.members.includes(member.id));
   membersList.forEach(member => member.fields.PARAM_PRICE.PARAM_GOARL_PRICE = config.goalPrice)




   return (
      <div className="table__wrapper">
         <table className='table'>
            <thead>
               <tr>
                  <th>Ход</th>
                  {membersList.map(member => {
                     if ((membersList.indexOf(member) + 1) === timerData.turn) {


                        return <Timer key={member.id} finishTime={timerData.finishTime} setTimerUpdate={setTimerUpdate} />
                     } else
                        return <td key={member.id} className='timer timer--closed'></td>
                  })}
               </tr>
               <tr>
                  <th>Параметры и требования</th>
                  {
                     membersList.map(member => <TableHeader key={member.id} name={member.name} number={membersList.indexOf(member) + 1} />)
                  }
               </tr>

            </thead>
            <tbody>
               {listOfParams.map(param => <TableRow key={param.id} param={param} data={membersList} />)}
            </tbody>

         </table>
      </div>

   )
}
