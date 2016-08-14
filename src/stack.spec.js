import test from 'ava';
import { Stack } from './stack';

// test.before(() => {});
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('should insert items to stack', t => {
  const s = new Stack();
  s.push(5);
  s.push(23);
  s.push(9);
  s.push(11);
  const result = s.toArray();
  t.true(result.findIndex(v => v.data === 5) !== -1);
  t.true(result.findIndex(v => v.data === 23) !== -1);
  t.true(result.findIndex(v => v.data === 9) !== -1);
  t.true(result.findIndex(v => v.data === 11) !== -1);
});

test('should return false to a populated stack', t => {
  const s = new Stack();
  s.push(5);
  s.push(23);
  s.push(9);
  s.push(11);
  t.true(!s.isEmpty());
});

test('should return true to an empty stack', t => {
  const s = new Stack();
  t.true(s.isEmpty());
});

test('should peek the first value in a populated stack', t => {
  const s = new Stack();
  s.push(5);
  s.push(23);
  s.push(9);
  s.push(11);
  t.true(s.peek() === 11);
});

test('should return null when peeking an empty stack', t => {
  const s = new Stack();
  t.true(s.peek() === null);
});

test('should remove nodes in a populated stack', t => {
  const s = new Stack();
  s.push(5);
  s.push(23);
  s.push(9);
  const result = [];
  result[0] = s.pop();
  result[1] = s.pop();
  result[2] = s.pop();
  t.true(s.isEmpty());
  t.true(result[0] === 9);
  t.true(result[1] === 23);
  t.true(result[2] === 5);
});

test('should return null when removing from an empty stack', t => {
  const s = new Stack();
  const result = s.pop();
  t.true(result === null);
});
