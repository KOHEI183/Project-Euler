// 13195 の素因数は 5, 7, 13, 29 である.
// 600851475143 の素因数のうち最大のものを求めよ.

// function Problem3(num1) {
//   let num = num1;
//   let anser = [];
//   for (let i = 2; num >= 0; i++) {
//     if (Number.isInteger(num/i)) {
//       anser.push(i);
//       num = num / i
//     }
//     console.log(num); //出口を考える
//     if(num === 1 || num === 0 ) return　anser [anser.length -1]
//   }
// }

// console.log(Problem3(600851475143));

let num = 600851475143;
let max = num
var i = 2;
while (i < max) { // 値がiと一緒になるまでまわす。
  while(max % i === 0) { // 最初の素数が出るまで回す
		(function(newnum) {
			max = newnum;
		})(max / i)
	}
	i++;
}

console.log(max);