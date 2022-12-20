import React from 'react'
import { TRADE_NAME } from '../../variables/tradeSettings'
import './Header.scss'

export default function Header() {

   const name = TRADE_NAME

   return (
      <header>
         <h1>Ход торгов <span className='header__name'>{name}</span></h1>
         <div className='header__subtitle'>
            <span className='header__warning'>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:</span>
         </div>
      </header>
   )
}
