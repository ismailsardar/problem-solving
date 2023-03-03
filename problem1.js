//problem = 73
let solution =(str, ending)=> str.endsWith(ending)

function solution1(str, ending){
  console.log(-ending.length)
  return str.substr(-ending.length) == ending;
}
console.log(solution1('Hello','lo'))