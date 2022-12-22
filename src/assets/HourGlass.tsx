import React, { useRef, useState } from 'react'
import './HourGlass.scss'

type Props = {
   time: number
}

export default function HourGlass({ time }: Props) {



   const seconds = Math.floor(time / 1000 % 3600 % 60)
   let animated = ''

   const bottomHigh = "M 350 60 H 380 V 0 H 60 V 60 H 90 V 160 L 187.5 220 L 90 280 V 380 H 60 V 440 H 380 V 380 H 350 V 280 L 252.5 220 L 350 160 V 60 Z M 320 296.764 V 380 H 290 V 313.527 L 220 270.451 L 150 313.527 V 380 H 120 V 296.764 L 220 235.226 L 320 296.764 Z M 320 143.236 L 220 204.774 L 120 143.236 V 60 H 320 V 143.236 Z"
   const bottomMedium = "M 350 60 H 380 V 0 H 60 V 60 H 90 V 160 L 187.5 220 L 90 280 V 380 H 60 V 440 H 380 V 380 H 350 V 280 L 252.5 220 L 350 160 V 60 Z M 320 296.764 V 380 H 290 V 333.527 L 220 315.451 L 150 333.527 V 380 H 120 V 296.764 L 220 235.226 L 320 296.764 Z M 320 143.236 L 220 204.774 L 120 143.236 V 60 H 320 V 143.236 Z"
   const bottomLow = "M 350 60 H 380 V 0 H 60 V 60 H 90 V 160 L 187.5 220 L 90 280 V 380 H 60 V 440 H 380 V 380 H 350 V 280 L 252.5 220 L 350 160 V 60 Z M 320 296.764 V 380 H 290 V 363.527 L 220 360.451 L 150 363.527 V 380 H 120 V 296.764 L 220 235.226 L 320 296.764 Z M 320 143.236 L 220 204.774 L 120 143.236 V 60 H 320 V 143.236 Z"
   const topHeigh = "290,126.473 290,80 150,80 150,126.473 220,169.549 	"
   const topMedium = "290,136.473 290,100 150,100 150,136.473 220,179.549 	"
   const topLow = "290,146.473 290,130 150,130 150,146.473 220,189.549 	"

   const fill = { top: topLow, bottom: bottomHigh }


   switch (seconds % 15) {
      case 9:
      case 8:
      case 7:
         fill.top = topHeigh; fill.bottom = bottomLow
         break;
      case 6:
      case 5:
      case 4:
         fill.top = topMedium; fill.bottom = bottomMedium
         break;

   }


   return (
      <div className={`hourglass ` + animated}>
         <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 440 440" >
            <g id="XMLID_6_" >
               <polygon id="XMLID_842_" points={fill.top} />
               <path id="XMLID_838_" d={fill.bottom} />

            </g>
         </svg>
      </div>

   )
}
