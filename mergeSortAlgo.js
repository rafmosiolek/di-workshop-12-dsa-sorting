const { performance } = require('perf_hooks')

// Split the array into halves and merge them recursively 
function mergeSort (arr) {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
    const left = arr.slice(0, middle); // items on the left side
    const right = arr.slice(middle); // items on the right side
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  // compare the arrays item by item and return the concatenated result
  function merge (left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  }

  var t0 = performance.now();
  const list = Array.from({length: 100}, () => Math.floor(Math.random() * 900));
  var t1 = performance.now();
  console.log(mergeSort(list));
  console.log("Call to mergeSort(list) took " + (t1 - t0) + " milliseconds.")
