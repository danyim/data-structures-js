/**
 * bubble sort implementation
 * @param  {Number[]}
 * @return {Number[]}
 */
export const bubble = input => {
  const sorted = Array.from(input);
  let swapped = true;
  let k = 0;
  let tmp;

  while (swapped === true) {
    swapped = false;
    k++;
    for (let i = 0; i < sorted.length - k; i++) {
      if (sorted[i] > sorted[i + 1]) {
        tmp = sorted[i];
        sorted[i] = sorted[i + 1];
        sorted[i + 1] = tmp;
        swapped = true;
      }
    }
  }

  return sorted;
};

/**
 * insertion sort implementation
 * @param  {Number]}
 * @return {Number]}
 */
export const insertion = input => {
  const sorted = Array.from(input);
  let j;
  let value;
  for (let i = 1; i < sorted.length; i++) {
    value = sorted[i];
    j = i;
    while (j > 0 && sorted[j - 1] > value) {
      sorted[j] = sorted[j - 1];
      j--;
    }
    sorted[j] = value;
  }
  return sorted;
};

/**
 * quicksort implementation
 * @param  {Number[]}
 * @return {Number[]}
 */
export const quick = input => {
  const sorted = Array.from(input);

  /*
   * recursive quick sort function
   *
   * The basic mechanics of this function is the following:
   *  1) Choose a pivot point (usually dead center of the array) and a low
   *     (left partition) and high (right partition) bound
   *  2) Search for values on the left and right partitions that need to swap
   *  3) Swap the values and recursively run the algorithm on the left and right
   *     partition
   *
   *  Doing this will sort the array on average in O(nlogn) time.
   *
   * @param  {Number[]} - array of values to sort
   * @param  {Number} - starting index of the left partition
   * @param  {Number} - starting index of the right partition
   * @return {Number[]} - sorted array
   */
  const qSort = (arr, left, right) => {
    let l = left;
    let r = right;
    let tmp; // for swapping
    const pivot = arr[Math.floor((left + right) / 2)];

    // keep running the algo while we haven't crossed wires with the
    // left/right partitions
    while (l <= r) {
      // search for the index of a value in the left partition that is not
      // lesser than the pivot
      while (arr[l] < pivot) {
        l++;
      }
      // likewise with the right partition
      while (arr[r] > pivot) {
        r--;
      }

      // swap if the left and right values that were found didn't cross
      if (l <= r) {
        tmp = arr[l];
        arr[l] = arr[r];
        arr[r] = tmp;
        l++;
        r--;
      }
    }

    // if the right partition has a misplaced value (only way to be left == r),
    // then perform the same sort using left and the r value as bounds
    if (left < r) {
      qSort(arr, left, r);
    }

    if (l < right) {
      qSort(arr, l, right);
    }
  };

  // start the first iteration of the quicksort with the first and last elements
  qSort(sorted, 0, sorted.length - 1);

  return sorted;
};

/**
 * @param  {Array}
 * @return {Array}
 */
export const merge = input => {
  const sorted = Array.from(input);

   /**
   * Merges two arrays in order based on their natural
   * relationship.
   * @param  {Array} - left The first array to merge.
   * @param  {Array} - right The second array to merge.
   * @return {Array} - The merged array.
   */
  function mergePartitions(left, right) {
    const result = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
  }

  /**
   * Sorts an array in ascending natural order using
   * merge sort.
   * @param  {Array} items The array to sort.
   * @return {Array} The sorted array.
   */
  function mergeSort(items) {
    if (items.length < 2) {
      return items;
    }

    const middle = Math.floor(items.length / 2);
    const left = items.slice(0, middle);
    const right = items.slice(middle);

    return mergePartitions(mergeSort(left), mergeSort(right));
  }

  return mergeSort(sorted);
};
