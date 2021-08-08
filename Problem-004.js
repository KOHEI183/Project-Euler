// 左右どちらから読んでも同じ値になる数を回文数という. 2桁の数の積で表される回文数のうち, 最大のものは 9009 = 91 × 99 である.
// では, 3桁の数の積で表される回文数の最大値を求めよ.
let a = 999
let b = 999
let sum = a * b

while (0 < sum) {
  sum = a * b
  if (check(sum,a,b)) return
  b--
  if (b === 0) {
    a--
    b = 999
  }
}

function check(sum,a,b) {
  let reversesum =  sum.toString().split('').reverse().join('')
  if(reversesum == sum) {
    console.log(a,b);
    return true
  }
}