// Create an array with values in the range between 0 and 1000
function getRandomArray(arrayLength) {
  let array = Array.from({ length: arrayLength }, () => {
    return Number((Math.random() * 1000).toFixed(2));
  });
  return array;
}

export function validateArray(array) {
  if (array.length <= 0) {
    throw new Error("Empty array");
  }
  if (array.length > 100) {
    throw new Error("Array max size: 100");
  }
  array.forEach((ele) => {
    if (isNaN(ele)) {
      throw new Error("Array must contain only numbers");
    }
    if (ele < 0) {
      throw new Error("Array with negative numbers");
    }
  });
}

// Merge Sort
// Mean
// median
// variance
// standardDeviantion
// plot

// Start
let dataArray = getRandomArray(100);

try {
  validateArray(dataArray);
} catch (error) {
  console.log(error);
}
