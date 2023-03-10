//problem = 73
let solution = (str, ending) => str.endsWith(ending)

function solution1(str, ending) {
  console.log(-ending.length)
  return str.substr(-ending.length) == ending;
}
console.log(solution1('Hello', 'lo'));

console.clear();
//problem = 74

function vowelOne(s) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let str = ''
  s.toLowerCase().split('').map((ele) => vowel.includes(ele) ? str += 1 : str += 0);
  return str;
}

function vowelOne1(s) {
  return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}

function vowelOne2(s) {
  return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
}
console.log(vowelOne2('vowelOne'))
console.log(12)

// console.clear();
//problem = 75
function none(arr, fun) {
  return !arr.some(ele => fun(ele));
}

function none1(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i]) == true) {
      return false;
    }
  }

  return true;
}
console.log(none([]))

// console.clear();
//problem = 77
// Classy Extentions
class Animal {

}
class Cat extends Animal {
  speak() {
    return this.name + ' meows.'
  }
}

class Cat1 extends Animal {
  constructor(value) {
    super(value)
  }
  speak() {
    return `${this.name} meows.`
  }
}

// console.clear()
//problem = 78
function checkDigit(number, index1, index2, digit) {
  console.log(Math.min(index1, index2))
  console.log(Math.max(index1, index2))
  // console.log()
  console.log(String(number).slice(Math.min(index1, index2), Math.max(index1, index2) + 1))
  return String(number).slice(Math.min(index1, index2), Math.max(index1, index2) + 1).includes(digit);
};
console.log(checkDigit(12345678912345, 1, 0, 1));

// console.clear()
//problem = 79
function keepOrder(ary, val) {
  let newArry = [...ary, val];
  newArry.sort((a, b) => a - b);
  return newArry.indexOf(val);
}

function keepOrder1(ary, val) {
  return ary.filter(a => a < val).length;
}
console.log(keepOrder1([1, 2, 3, 4, 7], 0));

// console.clear();
//problem = 80
let min = function(list) {
  console.log(list)
  return Math.min(...list)
}

let max = function(list) {
  console.log(list)
  return Math.max(...list);
}
//another way
var min1 = function(list) {
  return Math.min.apply(null, list);
}

var max1 = function(list) {
  return Math.max.apply(null, list);
}

console.log(min([
  -52, 56, 30,
  29, -54, 0,
  -110
]));

// console.clear();
//problem = 81
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
let Ball = function(ballType) {
  this.ballType = ballType || "regular"
};
ball1 = new Ball();
ball2 = new Ball("super");

class Ball1 {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

// console.clear()
//problem = 82
function computerToPhone(numbers) {
  return numbers.replace(/\d/g, e => '0789456123'[e]);
}
function computerToPhone1(numbers) {
  var map = [
    0,
    7, 8, 9,
    4, 5, 6,
    1, 2, 3,
  ]

  return numbers.replace(/\d/g, function(d) { return map[d] })
}
function computerToPhone2(numbers) {
  return numbers.split('').map(function(d) { return "0789456123"[d]; }).join('');
}
console.log(computerToPhone2('94561'));

// console.clear()
//problem = 83
function ifChuckSaysSo() {
  return 1 === '1'
}
function ifChuckSaysSo1() { return !true; }
console.log(ifChuckSaysSo())

console.clear()
//problem = 84
function joinStrings(string1, string2) {
  return `${string1.toString()} ${string2.toString()}`;
}
const joinStrings1 = (a, b) => `${a} ${b}`
console.log(joinStrings('string1', 12));

console.clear()
//problem = 85
// The fusc function -- Part 1
function fusc(n) {
  if (n < 2) return n;
  if (n % 2) return fusc((n - 1) / 2) + fusc((n - 1) / 2 + 1);
  return fusc(n / 2);
}

const fusc1 = (n) => n < 2 ? n : fusc(parseInt(n / 2)) + (n % 2) * fusc(parseInt(n + 1) / 2);

function fusc3(n) {
  if (n < 2) return n
  if (n & 1) return fusc(n >> 1) + fusc((n >> 1) + 1)
  return fusc(n >> 1)
}
console.log(fusc(10))