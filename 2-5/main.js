const money = process.argv[2];

  const result100 = Math.floor(money/100);
  const result10 = Math.floor((money-(result100*100))/10);
  const result1 = Math.floor(money%10);

  console.log(`100円玉${result100}枚、10円玉${result10}枚、1円玉${result1}枚`)
