import { PARAM_ACTIONS, PARAM_EVENT, PARAM_GARANTEE_TIME, PARAM_PREPAYMENTS, PARAM_PRICE, PARAM_TERM } from "./paramsConsts";
import { Param } from "./types";

export const listOfParams: Param[] = [
   {
      name: "Наличие комплекса мероприятий, повышающих стандарты качества изготовления",
      id: PARAM_EVENT
   },
   {
      name: "Срок изготовления лота, дни",
      id: PARAM_TERM
   },
   {
      name: "Гарантийные обязательства, мес",
      id: PARAM_GARANTEE_TIME
   },
   {
      name: "Условия оплаты",
      id: PARAM_PREPAYMENTS
   },
   {
      name: "Стоимость изготовления лота, руб. (без НДС)",
      id: PARAM_PRICE
   },
   {
      name: "Действия",
      id: PARAM_ACTIONS
   },

]