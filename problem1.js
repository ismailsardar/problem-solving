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

console.clear();
//problem = 80
let min = function(list) {
  console.log(list)
  return Math.min(...list)
}

let max = function(list) {
  console.log(list)
  return Math.max(...list);
}
console.log(min([
  -52, 56, 30,
  29, -54, 0,
  -110
]))