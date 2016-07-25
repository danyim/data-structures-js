'use strict';

import test from 'ava';
import {bubble/* , insertion, merge, quick */} from './sorts';

let set1;

/**
 * verifies that an array is sorted ascending
 * @param  {[Number]}
 * @return {[Boolean]}
 */
let verifyIsSortedAsc = a => {
  return a.reduce((prev, curr) => {
    return prev <= curr;
  }, false);
};

/**
 * @param  {Number} number of data in the set
 * @param  {Number} minimum value
 * @param  {Number} max value
 * @return {[Number]}
 */
let generateRandomSet = (count = 25, min = 1, max = 500) => {
  let r = [];
  for (var a = 0; a < count; a++) {
    r.push(Math.floor((Math.random() * max) + min));
  }
  return r;
};

test.before(() => {
  set1 = generateRandomSet();
});
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('sorts random set using bubble sort', t => {
  const result = bubble(set1);
  t.true(verifyIsSortedAsc(result));
});

// test('sorts random set using insertion sort', t => {
//   const result = insertion(set1);
//   t.true(verifyIsSortedAsc([result]));
// });

// test('sorts random set using merge sort', t => {
//   const result = merge(set1);
//   t.true(verifyIsSortedAsc([result]));
// });

// test('sorts random set using quick sort', t => {
//   const result = quick(set1);
//   t.true(verifyIsSortedAsc([result]));
// });
