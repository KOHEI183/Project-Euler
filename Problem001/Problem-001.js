// 10未満の自然数のうち, 3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり, これらの合計は 23 になる.
// 同じようにして, 1000 未満の 3 か 5 の倍数になっている数字の合計を求めよ.

function Euler(maxCount, a) {
  let anser = a
  for (let i = 1; i < maxCount; i++) {
    if (i % 3 === 0 || i % 5 === 0 ) anser += i;
  }
  return anser;
}

console.log(Euler(1000, 0));