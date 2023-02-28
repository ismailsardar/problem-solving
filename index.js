Problem = 01
let arr = [1, -4, 4, 2]
function sumfun(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
  // let sum = 0;
  //   for(let num of arr){
  //     if(num > 0){
  //       sum+=num;
  //     }
  //   }
  // return sum;
}
// console.log(sumfun(arr))

Problem = 02
function solution(number) {
  for (acc = 0; --number >= 2;) {
    // console.log(number)
    acc = !(number % 3) || !(number % 5) ? acc + number : acc;
  }
  return acc;
  // let sum = 0;
  // for(let i=1;i<number;i++){
  //   if((i%3==0)||(i%5==0)){
  //   sum+=i;
  // }
  // }
  // return sum;
}
// console.log(solution(25))

// Problem = 03 (Even or Odd)
function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// console.log(evenOrOdd(108))

// Problem = 04 
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 

function spinWords(string) {
  let sentence = '';
  let spliceString = string.split(" ");
  for (let word of spliceString) {
    // sentence = spliceString.length == 1 ? sentence : sentence + ' '; 
    if (word.length >= 5) {
      sentence += word.split('').reverse().join('') + ' ';
    } else {
      sentence += word + ' ';
    }
  }
  return `F${sentence.trim()}L`;
}
function spinWords(words) {
  return words.split(' ').map(function(word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ').trim();
}
// console.log(`F${spinWords("This is a test   ")}L`)


// Problem = 05
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str) {
  let newArray = [];
  let stringSplite = str.trim().split(' ').reverse().join('');
  return str.trim().split(' ').reverse().join(' ');
}
// console.log(`${reverseWords("This is a test   ")}`);

// Problem = 06
function getSum(a, b) {
  return (Math.abs(a - b) + 1) * (a + b) / 2;
  let min = a < b ? a : b;
  let max = a < b ? b : a;
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
// console.log(getSum(-1,2));
// console.log(Math.abs(-1 + 2))

// Problem = 07
function descendingOrder(n) {
  let num = n > 0 ? n : 0;
  return parseInt(num.toString().split('').sort().reverse().join(''))
}
// console.log(descendingOrder(NaN))
// let n = 12845
// let st = parseInt(n.toString().split('').sort().reverse().join(''))
// console.log(st);

// Problem = 08
// console.log(Number('e'))
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

// Problem = 09
function litres(time) {
  return parseInt(time * 0.5);
}
// console.log(litres(11.8))

// Problem = 10
function getEvenNumbers(numbersArray) {
  return numbersArray.filter(value => value % 2 == 0);
}
// console.log(getEvenNumbers([2,4,5,6]))

// Problem = 11
function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let newArray = [];
  for (let i = 0; i < birds.length; i++) {
    if (geese.includes(birds[i])) {
      newArray.push(birds[i]);
    }
  }
  return newArray;

  // return an array containing all of the strings in the input array except those that match strings in geese
};
let pk = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// console.log(gooseFilter(pk));

// Problem = 12
function past(h, m, s) {
  return (h >= 0 || m >= 0 || s >= 0) ? (h * 3600000) + (m * 60000) + (s * 1000) : false;
}
// console.log(past(0,0,0))

// Problem = 13
function invert(array) {
  let newArray = [];
  for (let ele of array) {
    ele >= 0 ? newArray.push(-ele) : newArray.push(Math.abs(ele));
  }
  return newArray;
}
// console.log(invert([]))

// Problem = 14
function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}
// console.log(simpleMultiplication(8))

// Problem = 15
function repeatStr(n, s) {
  return s.repeat(n);
}
// console.log(repeatStr(6,'I'))

// Problem = 16
function addLength(str) {
  let newArray = [];
  // let arrayStr = str.split(' ');
  str.split(' ').forEach(ele => newArray.push(`${ele} ${ele.length}`));
  return newArray;
}
// console.log(addLength('you will win'))

// Problem = 17
function shortcut(string) {
  return string.replace(/[aeiou]/g, '')
  // let vowel = ['a', 'e', 'i', 'o', 'u'];
  // return string.split('').filter(ele => !vowel.includes(ele)).join('');
}
// console.log(shortcut('goodbye'))
// console.log(`p${shortcut('goodbye')}L`)

// Problem = 18
function solve(compasses, gears, tablets) {
  let total = 0;
  let minNumber = Math.min(compasses, gears, tablets);
  total += compasses ** 2 + gears ** 2 + tablets ** 2 + minNumber * 7;
  // return `${compasses}, ${gears}, ${tablets},  ${total}`;
  return total;
}
// console.log(solve(1,1,1))
// 2 Compasses, 1 Gear and 1 Tablet is finally 13 points.

// Problem = 19
function consonantCount(str) {
  return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
  // let count = 0;
  // for(let ele of str.split('')){
  //   if(ele.match(/[bcdfghjklmnpqrstvwxyz]/gi)){
  //     count++;
  //   }
  // };
  // return count;
}
// console.log(consonantCount('h^$&^#$&^elLo world'))

// Problem = 20
function rowSumOddNumbers(n) {
  return n ** 3;
}
// console.log(rowSumOddNumbers(42))

// Problem = 21
function angle(n) {
  return n > 2 ? (n - 2) * 180 : 0;
  // if(n > 2){return (n - 2)*180};
}
// sum = (n - 2)180˚
// console.log(angle(3))

// Problem = 21
let number = function(busStops) {
  let totalGet = 0;
  let totalOff = 0;
  for (let i = 0; i <= busStops.length - 1; i++) {
    totalGet += busStops[i][0];
    totalOff += busStops[i][1];
  }
  return totalGet - totalOff;
}
//another way to solve problem 21
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// console.log(number([[10, 0], [3, 5], [5, 8]]))
// console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
// console.log(number([[0,0]]))

//problem = 22
function trim(str, size) {
  // let strArray = str.split('');
  // // console.log(strArray)
  // let newStr = '';
  // if(strArray.length <= 3){
  //   for(let i = 0; i < size; i++){
  //     newStr+=strArray[i];
  //   }
  // }
  // if(strArray.length <= size) return str;
  // if(strArray.length > size){
  //   for(let i = 0; i < size-3; i++){
  //     newStr+=strArray[i];
  //   }
  // }

  // if(strArray.length <= size) return str;
  // return `${newStr}...`;
  return str.length <= size ? str : str.slice(0, str.length > 3 ? size - 3 : size) + '...'
}
// console.log(trim("Code Wars is pretty rad", 50))
// console.log(trim("Creating kata is fun", 14))
// console.log(trim("Ha", 1))

//problem = 23
function addingShifted(array, shift) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let shiftInd = shift;

      // shiftInd > 0? 
      //   shiftInd == 0?newArray[j] += array[i][j]:
      if (shiftInd == 0) {
        newArray[j] += array[i][j];
      } else if (shiftInd > 0) {
        newArray.push()
        newArray[j] += array[i][j];
      }
      if (newArray[j] === undefined) {
        newArray[j] = array[i][j];
      } else {
        newArray[j] += array[i][j];
      }
    }
  }
  return newArray;
}
// console.log(addingShifted([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

//problem = 24
function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
  // let result = [];
  // for(let i = 0; i <= n; i++){
  //   result.push(Math.pow(2,i));
  // }
  // return result;
}
// console.log(powersOfTwo(4))


//problem = 25
// console.log(Math.floor(5 / 3))
function mango(quantity, price) {
  // return (quantity - Math.floor(quantity / 3)) * price;
  let c = quantity / 3;
  const discount = Math.trunc(c) * price;
  return quantity * price - discount;
}
// console.log(mango(5, 3))

//problem = 26
function _if(bool, func1, func2) {
  if (bool) {
    func1();
  } else {
    func2();
  }
}
// The 'if' function

//problem = 27
function otherAngle(a, b) {
  return a > 0 && b > 0 ? 180 - (a + b) : false;
}
// console.log(otherAngle(-60,30))

//problem = 28
const quarterOf = (month) => {

  return Math.ceil(month / 3)

  // if (month > 0 && month <= 3) {
  //   return 1;
  // } else if (month >= 4 && month <= 6) {
  //   return 2;
  // } else if (month >= 7 && month <= 9) {
  //   return 3;
  // } else if (month >= 10 && month <= 12) {
  //   return 4;
  // } else {
  //   return 0;
  // }

}
// console.log(quarterOf(11))

//problem = 29
var isSquare = function(n) {
  return Math.sqrt(n) % 1 === 0;
  // return  Number.isInteger(Math.sqrt(n))? true: false; // fix me
}
// console.log(isSquare(4))
// console.log(Number.isInteger(Math.sqrt(26)))

//problem = 31
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}
// console.log(createArray(2))

//problem = 32
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}
// console.log(howManyLightsabersDoYouOwn('Zach'))

//problem = 33
function grow(x) {
  return x.reduce((a, b) => a * b, 1);
  // let multe = 1;
  // x.forEach(ele => {multe *= ele});
  // return multe; 
}
// console.log(grow([1, 2, 3, 4]))


//problem = 33
function totalSubcuboids(x, y, z) {
  return (x * (x + 1n) * y * (y + 1n) * z * (z + 1n)) / 8n;
}
// console.log(totalSubcuboids(2n,2n,2n))
// console.log(10^9)

//problem = 34
function sumCubes(n) {
  return (n * (n + 1) / 2) ** 2;
  // let sum = 0;
  // for(let i = 1; i <= n; i++){
  //   sum += Math.pow(i,3);
  // }
  // return sum;
}
// console.log(sumCubes(2))

//problem = 35
function setReducer(input) {
  let newArray = [];
  let count = 1;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] !== input[i + 1] || !(input[i] !== input[i + 1])) {
      newArray.push(count);
    } else if (input[i] === input[i + 1]) {
      count += 1;
      newArray.push(count);
    }
  }
  return newArray;
}
// console.log(setReducer([1,1,1,2,1,2]))

//problem = 36
function solution(start, finish) {
  let distance = finish - start;
  let jump = (distance / 3) + (distance % 3)
  return Math.floor(jump);
}
// console.log(solution(1,5))

//problem = 37
function booleanToString(b) {
  return b.toString();
  // return (typeof b) === "boolean" ? b.toString() : false;
}
// console.log(booleanToString(false))

//problem = 38
// Collatz Conjecture (3n+1)
var hotpo = function(n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n % 2 == 0 ? n / 2 : 3 * n + 1, acc + 1);
  }

  // let count = 0;
  // while(n !== 1){
  //   count++;
  //   if(n%2===0){
  //     n = n / 2;
  //   }else{
  //     n = 3 * n + 1;
  //   }
  // }
  // return count;
}
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// console.log(hotpo(6))

//problem = 39
function SubtractSum(n) {
  let sum = 0;
  let numStr = n.toString().split('');
  let numArr = numStr.map(num => sum += Number(num));
  // let 
  return n - sum;
}
// console.log(SubtractSum(12))

//problem = 40
function solution(str) {

  return [...str].reverse().join('')

  // const reversesStr = str.split('').reverse().join('');
  // return reversesStr;
}
// console.log(solution("str"))

//problem = 41
// Function 2 - squaring an argument
function square(num) {
  return Math.pow(num, 2)
}
// console.log(square(3))

//problem = 42
// Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
  // The Math.hypot() static method returns the square root of the sum of squares of its arguments
}
// console.log(distanceBetweenPoints({x:3,y:3},{x:3,y:3}))
// Link = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot

//problem = 43
function mystery() {
  var results = { sanity: 'Hello' };
  return results;
}
// console.log(mystery());


//problem = 44
// Find Nearest square number
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
// const sqr = Math.pow(Math.round(Math.sqrt(9999)),2)
// console.log(Math.sqrt(9999))
// console.log(Math.round(Math.sqrt(9999)))
// console.log(sqr)
// console.log(nearestSq(10))

function nearestSq1(n) {
  let num = +Math.sqrt(n).toFixed();
  return num * num;
}
const xxx = 34.643;
// console.log(xxx.toFixed())


//problem = 45
function solve(s) {
  let sliseS = s.split('');
  let UpCount = 0;
  let LoCount = 0;
  let NuCount = 0;
  let SpCount = 0;
  sliseS.map((item) => {
    /^[A-Z]*$/.test(item) ? UpCount += 1 : UpCount;
    /^[a-z]*$/.test(item) ? LoCount += 1 : LoCount;
    /^[0-9]*$/.test(item) ? NuCount += 1 : NuCount;
    /^[^a-zA-Z0-9]+$/.test(item) ? SpCount += 1 : SpCount;
    // /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(item) ? SpCount+=1 : SpCount;
  })

  return [UpCount, LoCount, NuCount, SpCount];
}

function solve1(s) {
  return [/[A-Z]/g, /[a-z]/g, /[0-9]/g, /[^A-Za-z0-9]/g].map(re => (s.match(re) || []).length);
}
// console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"));
// console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));
// console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"));
// console.log(solve("*'&ABCDabcde12345"));
// console.log(solve("aAbBcC"));
// console.log(solve1("51~KsWEji0gs|=o=g/FFdS:3`Vw0#.24\9U76ZA!d=CEnt0XDbFVG'2"));


//problem = 46
// Hamming Distance
function hamming(a, b) {
  let splictA = a.split('');
  let splictB = b.split('');
  let count = 0;
  if (splictA.length == splictB.length) {
    for (let i = 0; i < splictA.length; i++) {
      splictA[i] !== splictB[i] ? count += 1 : count;
    }
  }
  return count;
}

function hamming1(a, b) {
  return a.split('').filter(function(v, i) { return a[i] != b[i] }).length;
}

// console.log(hamming1("Hello World","Hello World"));
// console.log(hamming("I like turtles","I like turkeys"));


//problem = 47
// Is n divisible by x and y?
function isDivisible(n, x, y) {
  return !(n % x || n % y)
  // return n%x===0 && n%y===0 ? true : false; 
}
// console.log(isDivisible(100,5,4))

//problem = 48
// Grasshopper - Terminal Game #1
function Hero(name) {

  return { name: name, experience: 0, health: 100, position: `00`, damage: 5 }

  // this.name = name || "Hero",
  // this.position = "00"
  // this.health = 100
  // this.damage = 5
  // this.experience = 0
}

//problem = 49
// Century From Year
function century(year) {
  return Math.floor(year / 100);
}
// console.log(century(2000))

// problem = 50
// Square(n) Sum
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + (num * num), 0);
  // let sum = 0;
  // for(let i=0; i<numbers.length;i++){
  //   sum+=Math.pow(numbers[i],2);
  // }
  // return sum;
}
// console.log(squareSum([1,2,2]))

//problem = 51
// Fun with ES6 Classes #1 - People, people, people
class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    Object.assign(this, { firstName, lastName, age, gender });
    // this.firstName = firstName,
    // this.lastName = lastName,
    // this.age = age,
    // this.gender = gender
  }

  sayFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}

//problem = 52
// Which are in?
let a1 = ["arp", "live", "strong"]
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

function inArray(array1, array2) {
  let r = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i]) === true) {
        r.push(array1[i])
      }
    }
  }

  r = [...new Set(r)];
  console.log(r)
  return (r.sort())
}

function inArray1(a1, a2) {
  var str = a2.join(' ');
  return a1.filter(s => str.indexOf(s) !== -1).sort();
}

// console.log(inArray(a1, a2))

//problem = 53
// Sum of Intervals
// console.log([1,2,3,4].length-1)
function sumIntervals(intervals) {
  let newArr = [];
  
  // for(let j = 0; j < intervals.length; j++){
  //   for(let i = intervals[j][0]; i < intervals[j][1]; i++){
  //     newArr.push(i);
  //   }
  // }
  
  intervals.forEach(e => {
    for(let i = e[0]; i < e[1]; i++){
      newArr.push(i);
    }
  });
  
  newArr = [...new Set(newArr)];
  console.log(newArr)
  return newArr.length;
}
let intervals = [[1,4],[7, 10],[3, 5]]
// console.log(sumIntervals(intervals))

//problem = 54
// ASCII Total
function uniTotal (string) {
 let sum = 0;
  for(let i = 0; i < string.length; i++){
    sum += string.charCodeAt(i)
  }
  return sum;
}

function uniTotal1 (string) {
 return a.split('').reduce((s,c) => s+c.charCodeAt(),0)
}
// console.log(uniTotal('aaa'))

//problem = 55
// Find out whether the shape is a cube
let cubeChecker = (volume, side)=> volume/side**2 == side && side > 0;

var cubeChecker1 = function(volume, side){
  return Math.pow(side, 3) === volume && side > 0;
};
console.log(cubeChecker1(125,-5))

//problem = 56
// Function 1 - hello world
let greet = () => "hello world!";


//problem = 57
// All Star Code Challenge #18
function strCount(str, letter){  
  let count = 0;
  str.split('').forEach(e=> e === letter ? count+=1 : count);
  return count;
}

function strCount1(str, letter){  
  return str.split(letter)
}
console.log(strCount1('Helllo','l'))
console.clear()

//problem = 58
// Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  return a===b ? false : true;
}

function xor1(a, b) {
  return a != b;
}
console.log(xor1(true, true))

//problem = 59
// Subtract the Sum
function SubtractSum2(n){
  const fruit = ["kiwi",
"pear",
"kiwi",
"banana",
"melon",
"banana",
"melon",
"pineapple",
"apple",
"pineapple",
"cucumber",
"pineapple",
"cucumber",
"orange",
"grape",
"orange",
"grape",
"apple",
"grape",
"cherry",
"pear",
"cherry",
"pear",
"kiwi",
"banana",
"kiwi",
"apple",
"melon",
"banana",
"melon",
"pineapple",
"melon",
"pineapple",
"cucumber",
"orange",
"apple",
"orange",
"grape",
"orange",
"grape",
"cherry",
"pear",
"cherry",
"pear",
"apple",
"pear",
"kiwi",
"banana",
"kiwi",
"banana",
"melon",
"pineapple",
"melon",
"apple",
"cucumber",
"pineapple",
"cucumber",
"orange",
"cucumber",
"orange",
"grape",
"cherry",
"apple",
"cherry",
"pear",
"cherry",
"pear",
"kiwi",
"pear",
"kiwi",
"banana",
"apple",
"banana",
"melon",
"pineapple",
"melon",
"pineapple",
"cucumber",
"pineapple",
"cucumber",
"apple",
"grape",
"orange",
"grape",
"cherry",
"grape",
"cherry",
"pear",
"cherry",
"apple",
"kiwi",
"banana",
"kiwi",
"banana",
"melon",
"banana",
"melon",
"pineapple",
"apple",
"pineapple"];

  do{
    let numToStr = n.toString();
  let digits = numToStr.split('');
  let total = digits.reduce((total, d)=>{
    return total += parseInt(d);
  },0);
  n -= total;
  } while(n > fruit.length);

  return fruit[n]
}

const SubtractSum3 = () => "apple";
console.log(SubtractSum2(335))

// console.clear()
//problem = 60
// Cat years, Dog years
let humanYearsCatYearsDogYears = function(humanYears) {
 if(humanYears == 1) return[1,15,15];
 if(humanYears == 2) return[2,24,24]; 
  
  return [humanYears,
          24 + (humanYears-2)*4,
          24 + (humanYears-2)*5
         ];
}

const humanYearsCatYearsDogYears1 = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];

console.log(humanYearsCatYearsDogYears1(10))

// console.clear()
//problem = 61
//Power
function numberToPower(number, power){
let result = 1;
  for(let i=0; i<power; i++){
    result *= number;
  }
  return result;
}

let vm = require('vm');
let numberToPower1 =(Q,S)=> vm.runInThisContext(Q+` *\* `+S)

console.log(numberToPower1(10,2))

console.clear()
//problem = 62
// Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
  return sperm === 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
}

const chromosomeCheck1 = sperm =>
  `Congratulations! You're going to have a ${sperm === `XY` ? `son` : `daughter`}.`;

console.log(chromosomeCheck1('XY'))

//problem = 64
// Be Concise IV - Index of an element in an array
function find(arr,ele){
 return arr.includes(ele)?array.indexOf(ele):'Not found';
}

const find1 = (a, e) => {
  const i = a.indexOf(e);
  return i < 0 ? 'Not found' : i;
}

// console.log(find1())

// console.clear();

//problem = 65
// Grasshopper - Summation
let summation = function (num) {
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum+=i;
  }
  return sum;
}
const summation1 = num => (1 + num) * num / 2;

console.log(summation1(8));

// console.clear()
//problem = 66
// Training JS #7: if..else and ternary operator
function saleHotdogs(n){
  return n<5 ? 100*n : (n >= 5 && n < 10) ? 95*n : 90*n;
}

function saleHotdogs1(n){
  return n*(n<5?100:n<10?95:90);
}
console.log(saleHotdogs1(2))

// console.clear()
//problem = 67
// Remove exclamation marks
function removeExclamationMarks(s) {
  return s.split('').filter((ele)=>{
    return ele !== '!'
  }).join('');
}

function removeExclamationMarks1(s) {
  return s.replace(/!/gi, '');
}

console.log(removeExclamationMarks1("WsnBSAcFwS!OdNueEgVgZ NwCRphBHCZ!UNGelgrlHx"));

// console.clear();
// problem = 68
// Pythagorean Triple
function isPythagoreanTriple(int) {
  let [a,b,c] = int.sort((a,b)=> a-b);
  console.log(a)
  console.log(b)
  console.log(c)
  return a**2 + b**2 == c**2
}

function isPythagoreanTriple1(integers) {
  let massiv = integers.sort((a, b) => a - b)
  return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
}

console.log(isPythagoreanTriple1([3,2,5]));

console.clear()
//problem = 69
// Unexpected parsing
function getStatus(isBusy) {
  let msg = (isBusy ? "busy" : "available");
  return {status: msg}
}
console.log(getStatus(true))