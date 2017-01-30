import test from 'ava';
import Heap from './heap';

// test.before(() => {});
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('should insert items to max heap with correct root', t => {
  const h = new Heap((a, b) => a > b);
  h.insert(5);
  h.insert(10);
  h.insert(23);
  h.insert(55);
  h.insert(7);
  h.insert(77);
  h.insert(32);
  t.true(h.heap[0] === Math.max.apply(null, h.heap));
});

test('should insert items to min heap with correct root', t => {
  const h = new Heap((a, b) => a < b);
  h.insert(5);
  h.insert(10);
  h.insert(23);
  h.insert(55);
  h.insert(7);
  h.insert(77);
  h.insert(32);
  t.true(h.heap[0] === Math.min.apply(null, h.heap));
});

test('should extract from max heap with correct root', t => {
  const h = new Heap((a, b) => a > b);
  h.insert(23);
  h.insert(51);
  h.insert(5);
  h.insert(17);
  h.insert(33);
  const result = h.extract();
  t.true(h.heap[0] === Math.max.apply(null, h.heap));
  t.true(h.heap.findIndex(x => x === result) === -1);
});

test('should extract from min heap with correct root', t => {
  const h = new Heap((a, b) => a < b);
  h.insert(17);
  h.insert(22);
  h.insert(33);
  const result = h.extract();
  t.true(h.heap[0] === Math.min.apply(null, h.heap));
  t.true(h.heap.findIndex(x => x === result) === -1);
});

test('should return null when extracting from an empty heap', t => {
  const h = new Heap();
  const result = h.extract();
  t.true(result === null);
});

test('should return the size of the heap', t => {
  const h = new Heap();
  h.insert(23);
  h.insert(51);
  h.insert(5);
  h.insert(17);
  h.insert(33);
  const result = h.size();
  t.true(result === 5);
});

test('should insert and extract and report the correct size', t => {
  const h = new Heap((a, b) => a > b);
  h.insert(5);
  h.insert(10);
  h.insert(23);
  h.extract();
  h.insert(55);
  h.extract();
  h.insert(7);
  h.extract();
  h.insert(77);
  h.extract();
  h.insert(32);
  h.extract();
  const result = h.size();
  t.true(result === 2);
});

test('should return the size of an unintialized heap', t => {
  const h = new Heap();
  const result = h.size();
  t.true(result === 0);
});

test('should cause a bubble down and triggers a bubble up on the left', t => {
  const h = new Heap();
  h.insert(11);
  h.insert(25);
  h.insert(2);
  h.insert(4);
  h.insert(8);
  const [ result1 ] =
    [
      h.extract(), // Removes 25
    ];
  t.true(result1 === 25);
});

test('should cause a bubble down and triggers a bubble up on the right', t => {
  const h = new Heap();
  h.insert(34);
  h.insert(100);
  h.insert(123);
  h.insert(86);
  h.insert(57);
  const [ result1 ] =
    [
      h.extract(), // Removes 25
    ];
  t.true(result1 === 123);
});
