const tate = process.argv[2]; //tate
const yoko = process.argv[3]; //yoko
// 奇数行は、"\*"から始まるが、偶数行は"-"から始める
for(let i = 1 ; i <= tate ; i ++){
  let resault = ' ';
  if(i % 2 == 0){
    for(let j = 1 ; j <= yoko ; j ++){
      if(j % 2 == 0){
        resault += '*';
      }else{
        resault += '-';
      }
    }
  }else{
    for(let j = 1; j <= yoko ; j ++){
      if(j % 2 == 0){
        resault += '-';
      }else{
        resault += '*';
      }
    } 
  }
  console.log(resault);
}  

