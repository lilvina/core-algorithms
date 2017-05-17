export default function fizzBuzz() {
  let array = []
  for(let num = 1; num <= 100; num++) {
    if(num % 3 === 0 && num % 5 === 0) {
      array.push('FizzBuzz')
    } else if(num % 3 === 0) {
      array.push('Fizz')
    } else if(num % 5 === 0) {
      array.push('Buzz')
    } else {
      array.push(array)
    }
  }
  return array
}