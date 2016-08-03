import test from 'ava';
import { bubble, insertion, quick, merge } from './sorts';

let set1;

/**
 * verifies that an array is sorted ascending
 * @param  {Number[]}
 * @return {Boolean[]}
 */
const verifyIsSortedAsc = a => {
  let sorted = true;
  a.reduce((prev, curr) => {
    if (prev !== null && curr < prev) {
      sorted = false;
    }
    return curr;
  }, null);
  return sorted;
};

/**
 * @param  {Number} - number of data in the set
 * @param  {Number} - minimum value
 * @param  {Number} - max value
 * @return {Number[]}
 */
const generateRandomSet = (count = 25, min = 1, max = 100) => {
  const r = [];
  for (let a = 0; a < count; a++) {
    r.push(Math.floor((Math.random() * max) + min));
  }
  return r;
};

test.before(() => {
  set1 = generateRandomSet();
});
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('generate a randomized array of 100 numbers', t => {
  t.true(generateRandomSet(100).length === 100);
});

test('verifies sorted array is sorted', t => {
  const data = [1, 42, 59, 66, 92];
  t.true(verifyIsSortedAsc(data));
});

test('verifies unsorted array is unsorted', t => {
  const data = [5, 4, 3, 2, 1];
  t.false(verifyIsSortedAsc(data));
});

test('sorts random set using bubble sort', t => {
  const result = bubble(set1);
  t.true(verifyIsSortedAsc(result));
});

test('sorts random set using insertion sort', t => {
  const result = insertion(set1);
  t.true(verifyIsSortedAsc(result));
});

test('sorts random set using quick sort', t => {
  const result = quick(set1);
  t.true(verifyIsSortedAsc(result));
});

test('sorts random set using merge sort', t => {
  const result = merge(set1);
  t.true(verifyIsSortedAsc(result));
});
