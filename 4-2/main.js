// 1から50までの数字を表示する。ただし3と3の倍数のときだけWOWと表示する

for(i=1;i<=50;i++){
  const result = [];
  if(i%3===0){
    result.push('WOW');
    }else if(String(i).match(/3/)){
      result.push('WOW');
    }else{
      result.push(i);
    }
    console.log(result);
  }

