//Reverse the provided string and return the reversed string.



function reverseString(str) {
  let chars = str.split('');
  let reversedChars = chars.reverse();
  let reversedStr = reversedChars.join('');
  return reversedStr;
}

reverseString("hello");