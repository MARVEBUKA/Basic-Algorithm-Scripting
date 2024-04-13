/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/




function chunkArrayInGroups(arr, size) {
   // Initialize an empty array to store the chunks
  let result = [];

  // Iterate through the array `arr` in steps of `size`
  for (let i = 0; i < arr.length; i += size) {
    // Slice the array to extract a chunk of `size` elements
    let chunk = arr.slice(i, i + size);
    
    // Push the extracted chunk into the result array
    result.push(chunk);
  }

  // Return the resulting two-dimensional array of chunks
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);