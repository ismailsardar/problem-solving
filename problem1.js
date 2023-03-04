//problem = 73
let solution = (str, ending) => str.endsWith(ending)

function solution1(str, ending) {
  console.log(-ending.length)
  return str.substr(-ending.length) == ending;
}
console.log(solution1('Hello', 'lo'));

console.clear();
//problem = 74

function vowelOne(s){
  let vowel = ['a','e','i','o','u'];
  let str = ''
  s.toLowerCase().split('').map((ele)=> vowel.includes(ele) ? str+=1 : str+=0);
  return str;
}

function vowelOne1(s){
  return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}

console.log(vowelOne1('vowelOne'))
console.log(12)