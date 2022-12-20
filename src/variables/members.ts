import { PARAM_ACTIONS, PARAM_ACTUAL_PRICE, PARAM_EVENT, PARAM_GARANTEE_TIME, PARAM_GOARL_PRICE, PARAM_PREPAYMENTS, PARAM_PRICE, PARAM_TAX, PARAM_TERM } from "./paramsConsts";
import { GOAL_PRICE } from "./tradeSettings";
import { Member } from "./types";

export const data: Member[] = [
   {
      id: 112, name: `ОАО Первый участник`,
      fields: {
         [PARAM_EVENT]: false,
         [PARAM_TERM]: 80,
         [PARAM_PREPAYMENTS]: 30,
         [PARAM_GARANTEE_TIME]: 24,
         [PARAM_PRICE]: {
            [PARAM_GOARL_PRICE]: GOAL_PRICE,
            [PARAM_ACTUAL_PRICE]: 2500000,
            [PARAM_TAX]: 20000
         },
         [PARAM_ACTIONS]: ''
      }
   },
   {
      id: 101, name: `OОО "Прогресс"`,
      fields: {
         [PARAM_EVENT]: false,
         [PARAM_TERM]: 70,
         [PARAM_PREPAYMENTS]: 35,
         [PARAM_GARANTEE_TIME]: 28,
         [PARAM_PRICE]: {
            [PARAM_GOARL_PRICE]: GOAL_PRICE,
            [PARAM_ACTUAL_PRICE]: 2400000,
            [PARAM_TAX]: 20000
         },
         [PARAM_ACTIONS]: ''
      }
   },
]
