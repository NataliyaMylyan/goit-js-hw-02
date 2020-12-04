function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'





//ВАРІАНТ 2
// const findLongestWord = function (string) {
//   const word = string.split(" ");
//   console.log(word);
//   let longestWord = 0;
//   let index = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length > longestWord) {
//       longestWord = word[i].length;
//       index = i;
//     }
//   }
//   return word[index];
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
