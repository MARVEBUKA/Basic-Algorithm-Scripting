/*Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/


function bouncer(arr) {
  let filteredArray = arr.filter(Boolean);
  
  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);