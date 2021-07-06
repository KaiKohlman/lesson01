// kobe.jsonを読み込みkeyが"kobe"のものだけを表示する

let pull = require('./kobe.json');
const array = [];

function pulled(n){
  for(key in n){
    let number = n[key]
    if(key === "kobe"){
    array.push(number);
    }else if(key !== 'kobe'){
    pulled(number);
    }
  }
}

pulled(pull)
console.log(array.join(''));


