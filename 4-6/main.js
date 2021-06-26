// コマンドライン引数で指定された時刻を表す長さ 5 の文字列 S が “XX:XX” の形式で与えられます。入力された時刻を時と分に分け、45分後の時と分を表示してください。
let array1 = []
array1 += process.argv.slice('2');
let array2 = array1.split(':');
let index = array2.indexOf(':')
let array3 = array2.map(Number)
// console.log(array3);

let hour = array3[0]
let minutes = array3[1]+45;

if(minutes >= 60){
  minutes = Math.abs(minutes - 60);
  hour =array3[0]+1;
}

if(hour >= 24){
  hour = Math.abs(hour - 24);
}

console.log(hour);
console.log(minutes);



