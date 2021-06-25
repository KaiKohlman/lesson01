const a = process.argv[2];
const b = process.argv[3];


//数字を逆にする箱が必要
function reverse(n){
  const fr = [];
  let splitn = n.split('');
  for(i=0;i<=splitn.length;i++){
    fr.unshift(splitn[i]);
  }
  return fr.join('');
}

console.log(Number(reverse(a))+Number(reverse(b)));






