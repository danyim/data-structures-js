import test from 'ava';
import { Queue } from './queue';

// test.before(() => {});
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('should insert items to queue', t => {
  const q = new Queue();
  q.add(5);
  q.add(23);
  q.add(9);
  q.add(11);
  const result = q.toArray();
  t.true(result.findIndex(v => v.data === 5) !== -1);
  t.true(result.findIndex(v => v.data === 23) !== -1);
  t.true(result.findIndex(v => v.data === 9) !== -1);
  t.true(result.findIndex(v => v.data === 11) !== -1);
});

test('should return false to a populated queue', t => {
  const q = new Queue();
  q.add(5);
  q.add(23);
  q.add(9);
  q.add(11);
  t.true(!q.isEmpty());
});

test('should return true to an empty queue', t => {
  const q = new Queue();
  t.true(q.isEmpty());
});

test('should peek the first value in a populated queue', t => {
  const q = new Queue();
  q.add(5);
  q.add(23);
  q.add(9);
  q.add(11);
  t.true(q.peek() === 5);
});

test('should return null when peeking an empty queue', t => {
  const q = new Queue();
  t.true(q.peek() === null);
});

test('should remove nodes in a populated queue', t => {
  const q = new Queue();
  q.add(5);
  q.add(23);
  q.add(9);
  const result = [];
  result[0] = q.remove();
  result[1] = q.remove();
  result[2] = q.remove();
  t.true(q.isEmpty());
  t.true(result[0] === 5);
  t.true(result[1] === 23);
  t.true(result[2] === 9);
});

test('should return null when removing from an empty queue', t => {
  const q = new Queue();
  const result = q.remove();
  t.true(result === null);
});
