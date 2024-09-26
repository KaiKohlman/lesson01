// "はるこ"の数と"こはる"の数を取得する。ただしStringクラスのメソッドを使わずに実装すること。

const str = "こはるはるここはるここはるはるここはるこはるはるはる";
let array = [];

for(i = 0; i < str.length; i ++){
  array.push(str[i]);
}
// console.log(array);

let koharu = [];
let haruko = [];
for(i = 0; i < array.length; i ++){
  let claster = array[i]+array[i+1]+array[i+2];
  if(claster == 'こはる'){
    koharu += 1;
  }else if(claster == 'はるこ'){
    haruko += 1
  }
}

console.log(`こはる：${koharu.length}`);
console.log(`はるこ：${haruko.length}`);





