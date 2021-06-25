const tate = Number(process.argv[2]);

for(let i = 1;i<=tate; i++){
  let resault = Array(tate-i+1).join(' '); 
  resault += Array(2*i).join('*');
  console.log(resault);
}