import test from 'ava';
import { ArrayList } from './array-list';

// test.before(t => { ... });
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });B

test('creates empty array list', t => {
  const list = new ArrayList();
  t.true(list.items.length === 0);
  t.true(list.count() === 0);
});

test('adds an item to the array list', t => {
  const list = new ArrayList();
  list.add('Tina');
  list.add('Fred');
  list.add('John');
  list.add('Bob');
  // list.add('Sarah');
  const result = list.toString();
  t.true(list.count() === 4);
  t.true(result.includes('Tina'));
  t.true(result.includes('Fred'));
  t.true(result.includes('John'));
  t.true(result.includes('Bob'));
});

test('fills the array to the appropriate length with nulls', t => {
  const list = new ArrayList();
  list.fillToLength(10);
  t.true(list.items.length === 10);
  // Make sure everything is nulled out
  t.true(list.items.filter(x => x !== null).length === 0);
  t.true(list.count() === 0); // 0 because we only filled and didn't populate
});

test('throws an error when an invalid fill length is provided', t => {
  const list = new ArrayList();
  list.add('Tina');
  list.add('Fred');
  const error = t.throws(() => {
    list.fillToLength(1);
  }, Error);
  t.is(error.message, 'Target length cannot be less than current length');
});

test('truncates the array to the appropriate length', t => {
  const list = new ArrayList();
  list.fillToLength(10);
  list.truncToLength(5);
  t.true(list.items.length === 5);
  // Make sure everything is nulled out
  t.true(list.items.filter(x => x !== null).length === 0);
  t.true(list.count() === 0); // 0 because we only filled and didn't populate
});

test('throws an error when an invalid truncation length is provided', t => {
  const list = new ArrayList();
  list.fillToLength(2);
  const error = t.throws(() => {
    list.truncToLength(5);
  }, Error);
  t.is(error.message, 'Target length cannot be greater than current length');
});

test('throws an error when attempting to truncate to an invalid size', t => {
  const list = new ArrayList();
  list.add('Tina');
  list.add('Fred');
  list.add('John');
  list.add('Bob');
  const error = t.throws(() => {
    list.truncToLength(3);
  }, Error);
  t.is(error.message, 'Target length cannot be less than or equal to the workable area');
});

test('clears the array list to an empty state after adding items', t => {
  const list = new ArrayList();
  list.add('Tina');
  list.add('John');
  list.add('Bob');
  list.add('Fred');
  list.add('Sarah');
  list.clear();
  t.true(list.count() === 0);
});

test('removes an item from the array list at specified index and truncates properly', t => {
  const list = new ArrayList();
  list.add('Tina');
  list.add('John');
  list.add('Bob');
  list.add('Fred');
  list.add('Sarah');
  // console.log(list.items);
  t.true(list.items.length === 8);
  t.true(list.removeAt(1) === 'John');
  t.true(list.removeAt(2) === 'Fred');
  t.true(list.items.length === 4); // Truncation
  t.true(list.removeAt(0) === 'Tina');
});

test('throws an error if an invalid index is provided when calling removeAt', t => {
  const list = new ArrayList();
  list.add('Tina');
  const error = t.throws(() => {
    // Index that's completely out of bounds of the defined array
    list.removeAt(3);
  }, Error);

  list.add('George');
  const error2 = t.throws(() => {
    // Index that's out of bounds of the workable area (array size is 4)
    list.removeAt(2);
  }, Error);
  t.is(error.message, 'Invalid index');
  t.is(error2.message, 'Invalid index');
});


// test('returns the correct string representation of an array list with and without a custom delimiter', t => {
//   const list = new ArrayList();
//   list.add('Tina');
//   list.add('John');
//   list.add('Bob');
//   list.add('Fred');
//   list.add('Sarah');
//   t.true(list.toString() === 'Tina, John, Bob, Fred, Sarah');
//   t.true(list.toString('|') === 'Tina|John|Bob|Fred|Sarah');
// });
