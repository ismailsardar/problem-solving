Problem = 01
let arr = [1,-4,4,2]
function sumfun(arr) {
  return arr.reduce((a,b)=> a+(b>0?b:0),0);
  // let sum = 0;
  //   for(let num of arr){
  //     if(num > 0){
  //       sum+=num;
  //     }
  //   }
  // return sum;
}
console.log(sumfun(arr))

Problem = 02
function solution(number){
for(acc=0; --number >= 2;){
  console.log(number)
    acc = !(number%3) || !(number%5) ? acc + number : acc;
  }
return acc;
let sum = 0;
for(let i=1;i<number;i++){
  if((i%3==0)||(i%5==0)){
  sum+=i;
}
}
return sum;
}
console.log(solution(25))

Problem = 03 (Even or Odd)
function evenOrOdd(number) {
  return number%2==0 ? "Even" : "Odd"; 
if(number%2==0){
  return "Even";
}else{
  return "Odd";
}
}
console.log(evenOrOdd(108))

Problem = 04 
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 

function spinWords(string){
  let sentence = '';
  let spliceString = string.split(" ");
  for(let word of spliceString){
      // sentence = spliceString.length == 1 ? sentence : sentence + ' '; 
    if(word.length >= 5){
      sentence += word.split('').reverse().join('') + ' ';
    }else{
      sentence += word + ' ';
    }
  }
  return `F${sentence.trim()}L`;
}
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ').trim();
}
console.log(`F${spinWords("This is a test   ")}L`)


Problem = 05
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str) {
let newArray = [];
let stringSplite = str.trim().split(' ').reverse().join('');
  return str.trim().split(' ').reverse().join(' ');
}
console.log(`${reverseWords("This is a test   ")}`);

Problem = 06
function getSum(a, b)
{
return (Math.abs(a - b) + 1) * (a+b) / 2;
let min = a < b ? a : b;
let max = a < b ? b : a;
let sum = 0;
for(let i = min; i <= max; i++){
  sum += i;
}
return sum;
}
console.log(getSum(-1,2));
console.log(Math.abs(-1 + 2))

Problem = 07
function descendingOrder(n) {
  let num = n > 0 ? n : 0;
  return parseInt(num.toString().split('').sort().reverse().join(''))
}
console.log(descendingOrder(NaN))
let n = 12845
let st = parseInt(n.toString().split('').sort().reverse().join(''))
console.log(st);

Problem = 08
console.log(Number('e'))
function aliasGen(first, sur) {
  let firstName = { A: 'Alpha', B: 'Beta', C: 'Cache', E: 'Energy', F: 'Function', D: 'Data', M: 'Malware', N: 'Nagware', H: 'Half-life', I: 'Ice', G: 'Glitch', L: 'Logic', O: 'OS', P: 'Phishing', K: 'Keystroke', V: 'Vanilla', J: 'Java', Q: 'Quantum', T: 'Trojan', S: 'Strike', R: 'RAD', U: 'Ultraviolet', W: 'WiFi', X: 'Xerox', Y: 'Y', Z: 'Zero' };
  let surname = { A: 'Analogue', B: 'Bomb', C: 'Catalyst', D: 'Discharge', E: 'Electron', F: 'Faraday', H: 'Hacker', I: 'IP', R: 'Roy', J: 'Jabber', T: 'T-Rex', O: 'Overclock', P: 'Payload', M: 'Mike', N: 'n00b', G: 'Gig', Q: 'Quark', K: 'Killer', L: 'Lazer', S: 'Spy', U: 'Unit', V: 'Virus', W: 'Worm', X: 'X', Y: 'Yob', Z: 'Zombie' };
  let firstLetter = first[0].toUpperCase();
  let surLetter = sur[0].toUpperCase();
  let alias = '';
  let validLetters = /^[A-Z]/i;
  if (!validLetters.test(firstLetter) || !validLetters.test(surLetter)) {
    return 'Your name must start with a letter from A - Z.';
  }
  // Get the alias based on the first letter of the first name
  if (firstName.hasOwnProperty(firstLetter)) {
    alias += firstName[firstLetter] + ' ';
  }
  // Get the alias based on the sur letter of the first name
  if (surname.hasOwnProperty(surLetter)) {
    alias += surname[surLetter];
  }
  return alias;
}

Problem = 09
function litres(time) {
  return parseInt(time*0.5);
}
console.log(litres(11.8))

Problem = 10
function getEvenNumbers(numbersArray){
  return numbersArray.filter(value => value%2==0);
}
console.log(getEvenNumbers([2,4,5,6]))

Problem = 11
function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let newArray = [];
  for (let i = 0; i < birds.length; i++) {
    if (geese.includes(birds[i])){
      newArray.push(birds[i]);
    }
}
  return newArray;

return an array containing all of the strings in the input array except those that match strings in geese
};
let pk =  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
console.log(gooseFilter(pk));

Problem = 12
function past(h, m, s){
  return (h>=0||m>=0||s>=0) ? (h*3600000)+(m*60000)+(s*1000):false;
}
console.log(past(0,0,0))

Problem = 13
function invert(array) {
  let newArray = [];
  for(let ele of array){
    ele>=0 ? newArray.push(-ele) : newArray.push(Math.abs(ele));
  }
   return newArray;
}
console.log(invert([]))

Problem = 14
function simpleMultiplication(number) {
    return number%2==0 ? number*8 : number*9;
}
console.log(simpleMultiplication(8))

Problem = 15
function repeatStr (n, s) {
  return s.repeat(n);
}
console.log(repeatStr(6,'I'))

Problem = 15
function addLength(str) {
  let newArray = [];
  // let arrayStr = str.split(' ');
  str.split(' ').forEach(ele => newArray.push(`${ele} ${ele.length}`));
  return newArray;
}
console.log(addLength('you will win'))

Problem = 15
function shortcut(string) {
  return string.replace(/[aeiou]/g,'')
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  return string.split('').filter(ele => !vowel.includes(ele)).join('');
}
console.log(shortcut('goodbye'))
console.log(`p${shortcut('goodbye')}L`)

// Problem = 16
function solve(compasses, gears, tablets) {
  let total = 0;
  let minNumber = Math.min(compasses, gears, tablets);
  total += compasses**2 + gears**2 + tablets**2 + minNumber*7;
  // return `${compasses}, ${gears}, ${tablets},  ${total}`;
  return total;
}
console.log(solve(1,1,1))
// 2 Compasses, 1 Gear and 1 Tablet is finally 13 points.