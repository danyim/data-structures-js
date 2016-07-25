'use strict';

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

// export function insertion(input) {
//   let sorted = Array.from(input);

//   return sorted;
// }

// export function merge(input) {
//   let sorted = Array.from(input);

//   return sorted;
// }

// export function quick(input) {
//   let sorted = Array.from(input);

//   return sorted;
// }
