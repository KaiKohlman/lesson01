// コマンドライン引数で5つの整数値を入力させ、5つの値のうち3番目に大きい値を表示するプログラムを作成せよ
const all = [process.argv[2],process.argv[3],process.argv[4],process.argv[5],process.argv[6]];

function compare(a, b){
  return a - b;
}

all.sort(compare);
console.log(all[2]);
