export default function Fibonacci(num){
  let array = [0, 1]
  if(num < 3){
    return array
  }

  for(let i = 2; i < num; i++){
    array[i] = array[i - 1] + array[i - 2]
  }
  return array
}