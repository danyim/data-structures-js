import test from 'ava';
import Trie from './trie';

// test.before(() => {});
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('should initialize trie', t => {
  const tr = new Trie();
  t.true(true);
});

test('should add to a trie', t => {
  const tr = new Trie();
  const value = 'test';
  tr.add(value);
  t.true(true);
});

test('should search from trie', t => {
  const tr = new Trie();
  const value = 'test';
  const result = tr.search(value);
  t.true(true);
});

test('should remove a value from trie', t => {
  const tr = new Trie();
  tr.remove('test');
  t.true(true);
});

test.todo('should test trie properties');
