import test from 'ava';
import HashTable from './hash-table';

// test.before(() => {});
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('should hash a value', t => {
  const h = new HashTable();
  const input = 'testing';
  const result = h.hash(input);
  t.true(result !== input);
});

test('should insert values into the hash table', t => {
  const h = new HashTable();
  h.insert('Key 1', 'Value to key 1');
  h.insert('Key 2', 'Value to key 2');
  h.insert('Key 3', 'Value to key 3');
  t.true(h.length === 3);
});

test('should return null when trying to retrieve a value an empty hash table', t => {
  const h = new HashTable();
  const result = h.get('Key doesn\'t exist');
  t.true(result === null);
});

test('should insert values and retrieve a value from the hash table', t => {
  const h = new HashTable();
  const key = 'Test Key', value = 'Test value';
  h.insert('Key 1', 'Value to key 1');
  h.insert('Key 2', 'Value to key 2');
  h.insert('Key 3', 'Value to key 3');
  h.insert(key, value);

  const result = h.get(key);
  t.true(result === value);
});

test('should insert colliding values and retrieve the correct value from the hash table', t => {
  const h = new HashTable();
  const key = 'Test Key', value1 = 'Test value1', value2 = 'Test value2';
  h.insert(key, value1);
  h.insert(key, value2);

  const result = h.get(key);
  t.true(result === value2);
});
