// コマンドライン引数で渡された数を小さい順に並べた配列を生成してconsole.log()で出力してください。ただしArray型のメソッドを使うことを禁止します(push()を除く)。入力される数値は0以上9999以下とします。
const array1 =[];
const result = [];

for (i = 2;i < process.argv.length; i ++){
  let number = process.argv[i];
  array1.push(number);
}

// console.log(array1);

let change = []
for(i = 0; i < array1.length; i ++){
  change.push(Number(array1[i]));
}

// console.log(change);

let max = change[0];
let min = change[0];

for(i = 0 ; i <= change.length ; i ++){
  if(change[i] > max){
    max = change[i];
  }else if(change[i] < min){
  min = change[i];
  }
}

for(let i = min; i <= max; i ++){
  for(let j = 0; j <= change.length; j ++){
    if(i == change[j]){
      result.push(i);
    }
  }
}
console.log(result);

