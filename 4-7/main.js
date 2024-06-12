// １つ目のコマンドライン引数を配列に変換し、２つ目のコマンドライン引数が含まれているもの(ただし大文字小文字の区別しない)だけの配列にしてください。また、アルファベット順に並べて全て小文字で表示してください。

let array1 = process.argv[2].toLowerCase();
let array2 = process.argv[3];
array1 = array1.split(',');
let array3 = [];

for( let i = 0; i <array1.length; i ++){
  if(array1[i].includes(array2)){
    array3.push(array1[i]);
  }
}
array3 = array3.sort();

console.log(array3);
