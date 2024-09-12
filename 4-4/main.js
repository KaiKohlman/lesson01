// 並びはランダムで(0~9)までの全ての数字が入った要素が10個の配列を作成して下さい。

let result = [];
for(let i = 0; result.length <= 18; i ++){
  let number = Math.floor((Math.random()*10));
  if(!result.includes(number)){
  result += number
  result += ' '
  }
}

console.log(result);