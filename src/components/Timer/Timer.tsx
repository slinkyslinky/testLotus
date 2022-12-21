import React, { useEffect, useState } from 'react'

import './Timer.scss'

type Props = {

  memberOrder: number,
  turn: number,
  leftTime: number,
  membersNumber: number,
  setTimerUpdate: any
}

export default function Timer({ memberOrder, turn, leftTime, membersNumber, setTimerUpdate }: Props) {


  const [time, setTime] = useState(leftTime)

  let visibleTime = 0;

  if (time >= 0) {
    visibleTime = time
  } else {
    visibleTime = 0
  }





  console.log('timer render', time, ' ', leftTime);










  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {

        setTime(time - 1)

      }, 1000)

    }
    if (time <= -10) {
      console.error("Something went Wrong")
    } else
      if (time <= 0) {
        console.log('useEffect');
        const timer = setTimeout(() => {

          setTime(time - 1)

        }, 1000)

        setTimerUpdate({})
      }
  }, [time])




  const hoursLeft = addZero(Math.floor(visibleTime / 3600));
  const minutesLeft = addZero(Math.floor(visibleTime % 3600 / 60));
  const secondsLeft = addZero(Math.floor(visibleTime % 3600 % 60))

  function addZero(value: number) {
    return (value < 10) ? '0' + value.toString() : value.toString()
  }


  return (
    <td className='timer' id='timer' >
      <div className="timer__time">{hoursLeft}:{minutesLeft}:{secondsLeft}</div>
    </td>
  )
}
