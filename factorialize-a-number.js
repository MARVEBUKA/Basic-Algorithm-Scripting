//Return the factorial of the provided integer.


function factorialize(num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  } else if (num === 0 || num === 1) {
    return 1; // 0! and 1! are both equal to 1
  } else {
    // Calculate the factorial of num for num >= 2
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
factorialize(5);