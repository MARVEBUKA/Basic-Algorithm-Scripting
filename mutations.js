/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.*/



function mutation(arr) {
 // Convert both strings to lowercase to ignore case sensitivity
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();

  // Iterate through each character in str2
  for (let char of str2) {
    // Check if the current character in str2 is not present in str1
    if (!str1.includes(char)) {
      return false; // If any character is not found, return false
    }
  }

  // If all characters from str2 are found in str1, return true
  return true;
}

mutation(["hello", "hey"]);