import React, { useEffect, useState } from 'react'
import './Timer.scss'

type Props = {
  start: number,
  finish: number,
  memberOrder: number,
  turn: number,
  setTurn: any,
  membersNumber: number,
}

export default function Timer({ start, finish, memberOrder, turn, setTurn, membersNumber }: Props) {

  const [time, setTime] = useState((start - finish) / 1000)

  useEffect(() => {

  }, [time])


  if (turn !== memberOrder) {
    return <td className='timer timer--closed'></td>
  }




  const timer = setTimeout(() => {

    setTime(time - 1)

  }, 1000)

  if (time === 0) {
    clearTimeout(timer)
    setTimeout(() => {
      setTime((start - finish) / 1000)
      if (turn === membersNumber) {
        setTurn(1)
      } else {
        setTurn(turn + 1)
      }
    }, 500)

  }


  const hoursLeft = addZero(Math.floor(time / 3600));
  const minutesLeft = addZero(Math.floor(time % 3600 / 60));
  const secondsLeft = addZero(Math.floor(time % 3600 % 60))

  function addZero(value: number) {
    return (value < 10) ? '0' + value.toString() : value.toString()
  }


  return (
    <td className='timer' id='timer'>
      <div className="timer__time">{hoursLeft}:{minutesLeft}:{secondsLeft}</div>
    </td>
  )
}
