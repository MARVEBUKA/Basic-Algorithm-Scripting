//Return the length of the longest word in the provided sentence.




function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestLength = 0;

  for (let i = 0; i < words.length; i++) {
    let currentWordLength = words[i].length;
    if (currentWordLength > longestLength) {
      longestLength = currentWordLength;
    }
  }

  return longestLength;
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");