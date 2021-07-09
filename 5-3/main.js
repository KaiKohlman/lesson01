// playdataのcountが大きい順にソートして、曲のtitleとplaydataのcountを[順位:${title}\t${count}]のフォーマットで表示してください
const playData = require('./playdata.json');
const songs = require('./songs.json')
const playdata = playData.data
const song = songs.songs

playdata.sort(function(a, b) {
  return b.count - a.count
  });
// console.log(playdata);


for (let i = 0; i < playdata.length; i++) {
  let data = playdata[i];
  
  const match = song.find((song) => {
    return song.id == data.id;
  });
  // console.log(match);

  const title = match.title;
  const count = data.count;

  console.log(`${i+1}位:${title}/t${count}`);
}
