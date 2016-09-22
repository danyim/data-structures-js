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
  // const list = new ArrayList();
  // t.true(list.count === 0);
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
