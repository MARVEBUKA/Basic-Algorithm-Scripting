/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.*/





function getIndexToIns(arr, num) {
 // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Initialize a variable to store the index where num should be inserted
  let index = 0;

  // Iterate through the sorted array to find the correct index
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      index = i + 1; // Increment index to account for insertion after current element
    } else {
      break; // Stop iteration once we find the correct index
    }
  }

  // Return the index where num should be inserted
  return index;
}

getIndexToIns([40, 60], 50);