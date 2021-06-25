
// for(i=1;arr<=9;arr++){
//   for(j=1;j<=9;j++){
//   }
//   console.log(i*j);
// }


for(let i = 1;i <= 9;i ++){
  let arr =[];
    for(let j=1;j<=9;j++){
      arr += i*j
      arr += ' '
    }
    console.log(arr);
}
