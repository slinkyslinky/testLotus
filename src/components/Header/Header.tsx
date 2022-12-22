import React from 'react'

import { Config } from '../../variables/types'
import './Header.scss'


type Props = {
   config: Config
}
export default function Header({ config }: Props) {
   const { name, startDate, startTime } = config


   return (
      <header>
         <h1>Ход торгов <span className='header__title'>{name} ({startDate}) {startTime}</span></h1>
         <div className='header__subtitle'>
            <span className='header__warning'>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:</span>
         </div>
      </header>
   )
}
