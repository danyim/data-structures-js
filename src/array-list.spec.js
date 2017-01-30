import test from 'ava';
import { ArrayList } from './array-list';

// test.before(t => { ... });
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });B

test('creates empty array list', t => {
  const list = new ArrayList();
  t.true(list.items.length === 0);
});

test('reports array list count correctly', t => {
  const list = new ArrayList();
  t.true(list.count() === 0);
});


test('adds an item to the array list', t => {
  const list = new ArrayList();
  list.add('Tina');
  // list.add('Fred');
  // list.add('John');
  // list.add('Bob');
  // list.add('Fred');
  // list.add('Sarah');
  // list.toString();
  // t.true(list.count === 0);
});

test('fills the array to the appropriate length with nulls', t => {
  const list = new ArrayList();
  list.fillToLength(10);
  t.true(list.items.length === 10);
  t.true(list.items.filter(x => x !== null).length === 0); // check for nulls
  t.true(list.count() === 0); // 0 because we only filled and didn't populate
});

// test('removes an item from the array list', t => {
//   const list = new ArrayList();
//   t.true(list.count() === 0);
// });

// test('clears the array list correctly after adding items', t => {
//   const list = new ArrayList();
//   list.add('Tina');
//   list.add('John');
//   list.add('Bob');
//   list.add('Fred');
//   list.add('Sarah');
//   list.clear();
//   t.true(list.count() === 0);
// });

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
