// コマンドライン引数で渡された数を小さい順に並べた配列を生成してconsole.log()で出力してください。ただしArray型のメソッドを使うことを禁止します(push()を除く)。入力される数値は0以上9999以下とします。

const array =[];
const result = [];

for (i = 2;i < process.argv.length; i ++){
  let number = process.argv[i];
  array.push(Number(number));
}

let max = array[0];
let min = array[0];

for(i = 0 ; i <= array.length ; i ++){
  if(array[i] > max){
    max = array[i];
  }else if(array[i] < min){
  min = array[i];
  }
}

for(let i = min; i <= max; i ++){
  for(let j = 0; j <= array.length; j ++){
    if(i == array[j]){
      result.push(i);
    }
  }
}
console.log(result);

