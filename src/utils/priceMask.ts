export function priceMask(price: number) {

   const priceString: string = price.toString()
   const priceArray = priceString.split('')

   for (let i = priceString.length - 3; i > 0; i = i - 3) {
      priceArray.splice(i, 0, ',')


   }


   return priceArray.join('') + ' руб.'


}