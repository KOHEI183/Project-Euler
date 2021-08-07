// フィボナッチ数列の項は前の2つの項の和である. 最初の2項を 1, 2 とすれば, 最初の10項は以下の通りである.
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// 数列の項の値が400万以下のとき, 値が偶数の項の総和を求めよ.

function problem2(num1,num2) {
  let a = num1;
  let b = num2;
  let c = 0;
  let sum = 0;
  while (c < 4000000) {
    c = a + b
    a = b
    b = c
    if(c % 2 === 0 ) {
      sum += c
    }
  }
  return sum
}
console.log(problem2(1,2));