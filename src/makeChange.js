export default function makeChange({price, amountGiven}) {
  // your code here
  let objectChange = {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0}
  let difference = amountGiven - price

  if( difference >= 25) {
    Math.floor(difference / 25)
    let quarters = Math.floor(difference / 25)
    difference = (difference % 25)
    objectChange.quarters = quarters
  }

  if( difference >= 10) {
    Math.floor(difference / 10)
    let dimes = Math.floor(difference / 10)
    difference = (difference % 10)
    objectChange.dimes = dimes
  }

  if( difference >= 5) {
    Math.floor(difference / 5)
    let nickels = Math.floor(difference / 5)
    difference = (difference % 5)
    objectChange.nickels = nickels
  }

  if( difference > 0) {
    let pennies = difference
    objectChange.pennies = pennies
  }
  return objectChange

}
