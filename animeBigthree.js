const animeBigthree = [
  'Bleach',
  'Naruto',
  'One Piece',
  'My Hero Academia',
  'Black Clover',
  'Demon Slayer',
  'Dragon Ball',
  'Sailor Moon',
  'Yu-Yu Hakoshu'
]

const myFavbigThree = 'My favorite Gen of the Big three Bleach, One Piece and Naruto'

const bigthreeGentwo = {
  genTwo: true,
  otherGen: false,
  quote: 'Gen 1 & 3 is awesome but Gen 2 is my fav'
}

function randomGenShonen() {
  return animeBigthree [Math.floor(Math.random() * animeBigthree.length)]
}

export {
  animeBigthree,
  myFavbigThree,
  bigthreeGentwo,

}
console.log(animeBigthree)