import { PARAM_ACTIONS, PARAM_ACTUAL_PRICE, PARAM_EVENT, PARAM_GARANTEE_TIME, PARAM_GOARL_PRICE, PARAM_PREPAYMENTS, PARAM_PRICE, PARAM_TAX, PARAM_TERM } from "./paramsConsts"


export interface Member {

   id: number,
   name: string,
   fields: Fields
}


export type Fields = {
   [PARAM_EVENT]: boolean,
   [PARAM_TERM]: number,
   [PARAM_GARANTEE_TIME]: number,
   [PARAM_PREPAYMENTS]: number,
   [PARAM_PRICE]: {
      [PARAM_ACTUAL_PRICE]: number,
      [PARAM_TAX]: number,
      [PARAM_GOARL_PRICE]: number,
   }
   [PARAM_ACTIONS]: any,


}
export interface Param {
   name: string,
   id: keyof Fields
}

export type TimerData = {
   turn: number,
   finishTime: number
}


