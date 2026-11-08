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

// Mean
export function getMean(array) {
  const sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  );

  return sum / array.length;
}

// median
export function getMedian(array) {
  const sortedArray = array.sort();
  const arraySize = array.length;

  // Array with odd size
  if (arraySize % 2 != 0) {
    const medianIndex = Math.floor(arraySize / 2);
    return sortedArray[medianIndex];
  }
  // Array with even size
  if (arraySize % 2 === 0) {
    const medianIndex = arraySize / 2;

    // Get the mean of the 2 middle values
    const median =
      (sortedArray[medianIndex - 1] + sortedArray[medianIndex]) / 2;

    return median;
  }
}
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
