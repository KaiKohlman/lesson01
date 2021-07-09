// jsonデータを読み込んでメンバーの給与を計算し、給与の多い順に並び替えて表示しよう

// | ランク(rank) | 勤続年数 | 給与                      |
// | ------------ | -------- | ------------------------- |
// | A            | 5 年未満 | 3000x 勤続年数+100,000    |
// | A            | 5 年以上 | 3000x 勤続年数+120,000    |
// | B            | -        | 4000x 勤続年数+140,000    |
// | C            | -        | 5000x 勤続年数+160,000    |

const JSON = require("./users.json");

// [
//   { name: 'Suzuki', rank: 'A', years: 3 },
//   { name: 'Yamada', rank: 'A', years: 5 },
//   { name: 'Sato', rank: 'B', years: 4 },
//   { name: 'Ito', rank: 'B', years: 7 },
//   { name: 'Tanaka', rank: 'C', years: 1 },
//   { name: 'Takahashi', rank: 'C', years: 10 },
// ]

const user = JSON.users

for(i = 0; i < user.length; i ++){
    if(user[i].rank == 'A' && user[i].years >=5){
      user[i]["salary"] = 3000*user[i].years+120000;
    }
    if(user[i].rank == 'A' && user[i].years < 5){
      user[i]["salary"] = 3000*user[i].years+100000;
    }
    if(user[i].rank == 'B' ){
      user[i]["salary"] = 4000*user[i].years+140000;
    }
    if(user[i].rank == 'C' ){
      user[i]["salary"] = 5000*user[i].years+160000;
    }
}

user.sort(function(a,b){
  return b.salary - a.salary
});

for(i = 0; i < user.length ; i ++){
  console.log(user[i].name+":"+user[i].salary)
}