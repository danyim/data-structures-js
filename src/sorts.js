'use strict';

/**
 * bubble sort implementation
 * @param  {[Number]}
 * @return {[Number]}
 */
export function bubble(input) {
  let sorted = Array.from(input);
  let swapped = true;
  let k = 0;
  let tmp;

  while (swapped === true) {
    swapped = false;
    k++;
    for (var i = 0; i < sorted.length - k; i++) {
      if (sorted[i] > sorted[i + 1]) {
        tmp = sorted[i];
        sorted[i] = sorted[i + 1];
        sorted[i + 1] = tmp;
        swapped = true;
      }
    }
  }

  return sorted;
}

/**
 * insertion sort implementation
 * @param  {[Number]}
 * @return {[Number]}
 */
export function insertion(input) {
  let sorted = Array.from(input);
  let j;
  let value;
  for (var i = 1; i < sorted.length; i++) {
    value = sorted[i];
    j = i;
    while (j > 0 && sorted[j - 1] > value) {
      sorted[j] = sorted[j - 1];
      j--;
    }
    sorted[j] = value;
  }
  return sorted;
}

/**
 * quicksort implementation
 * @param  {[Number]}
 * @return {[Number]}
 */
export function quick(input) {
  let sorted = Array.from(input);

  function qSort(arr, left, right) {
    let i = left;
    let j = right;
    let tmp;
    let pivot = arr[Math.floor((left + right) / 2)];

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
      }
    }

    if (left < j) {
      qSort(arr, left, j);
    }

    if (i < right) {
      qSort(arr, i, right);
    }
  }

  // Start the first iteration of the queue with the first and last elements
  qSort(sorted, 0, sorted.length - 1);

  return sorted;
}

// export function merge(input) {
//   let sorted = Array.from(input);

//   return sorted;
// }

// let generateRandomSet = (count = 10, min = 1, max = 10) => {
//   let r = [];
//   for (var a = 0; a < count; a++) {
//     r.push(Math.floor((Math.random() * max) + min));
//   }
//   return r;
// };

// let randset = generateRandomSet();
// const result = quick(randset);

