
// 分布表
// 15人の生徒のテストの点数の分布表を作って下さい

const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60];
const shishagonyuu = [];
const dosuu = [10,20,30,40,50,60,70,80,90,100];
const devide = [];
const result = [];
let sum = 0;


//// 四捨五入
for(i=0;i<students.length;i++){
  const sisha=Math.floor(students[i]/10)*10;
  shishagonyuu.push(sisha);
}
// console.log(shishagonyuu);[ 10, 30, 100, 90, 20, 60, 70, 40,  60, 80, 80, 50,40, 30, 60]


for (let i = 10; i <=100; i+=10) {
  for (let j = 0; j < shishagonyuu.length; j++) {
    if (i===shishagonyuu[j]) {
      sum++;
    }
  }
  devide.push(sum);
  sum = 0;
}

// console.log(devide);[1, 1, 2, 2, 1, 3, 1, 2, 1, 1]
//分ける
const max = Math.max(...devide);
  for(let i = 0;i < max; i++){

 for(let j = 0;j <= 10; j++){

      if(devide[j] >= max-i){
        result.push(' * ')
      }else{
        result.push('   ')
      }
    }
let resault = result.join('')
console.log(resault);
result.length = 0;
}

console.log('-------------------------------');

for(let i = 10;i<=100;i+=10){
  
}
var a = "";
for (var i = 10; i <= 100; i+=10) {
    a += i;
    a += " "
}

console.log(a);

