import React, { useEffect, useState } from 'react'
import HourGlass from '../../assets/HourGlass'

import './Timer.scss'

type Props = {


  finishTime: number,

  setTimerUpdate: any
}

export default function Timer({ finishTime, setTimerUpdate }: Props) {


  const [time, setTime] = useState(finishTime - new Date().getTime())
  let visibleTime = 0;

  if (time >= 0) {
    visibleTime = time
  } else {
    visibleTime = 0
  }


  const timer = setTimeout(() => {
    setTime(finishTime - new Date().getTime())
  }, 500)


  useEffect(() => {

    if (time <= -10 * 1000) {
      console.error("Something went Wrong")
      clearTimeout(timer)
    } else
      if (time <= 0) {
        setTimerUpdate({})
      }
  }, [time])




  const hoursLeft = addZero(Math.floor(visibleTime / 1000 / 3600));
  const minutesLeft = addZero(Math.floor(visibleTime / 1000 % 3600 / 60));
  const secondsLeft = addZero(Math.floor(visibleTime / 1000 % 3600 % 60))

  function addZero(value: number) {
    return (value < 10) ? '0' + value.toString() : value.toString()
  }


  return (
    <td className='timer' id='timer' >
      <div className="timer__flex-wrap">
        <div className="flex-add"></div>
        <div className="timer__time">{hoursLeft}:{minutesLeft}:{secondsLeft}</div>
        <HourGlass time={time} />
      </div>

    </td>
  )
}
