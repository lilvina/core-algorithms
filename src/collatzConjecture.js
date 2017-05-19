let array = []
export default function collatzConjecture(n){
  if(n === 1) {
    array.push(n)
    return array
  }

  if(n % 2 === 0){
    array.push(n)
    n = n / 2
    return collatzConjecture(n)
  } else if(n % 2 !== 0){
    array.push(n)
    n = n * 3 + 1
    return collatzConjecture(n)
  }

}