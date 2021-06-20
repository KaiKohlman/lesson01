// 並びはランダムで(0~9)までの全ての数字が入った要素が10個の配列を作成して下さい。

let result = [];
for(let i = 0; i <= 9; i ++){
  result += Math.floor((Math.random()*10));
  result += ' '
}
console.log(result);


