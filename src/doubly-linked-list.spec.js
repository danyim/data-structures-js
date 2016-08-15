import test from 'ava';
import DoublyLinkedList from './doubly-linked-list';

// test.before(() => {});
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('should insert items to doubly linked list', t => {
  const list = new DoublyLinkedList();
  list.insert(5);
  list.insert(10);
  list.insert(23);
  list.insert(55);
  list.insert(7);
  const result = list.toArray();
  t.true(result.findIndex(v => v === 5) !== -1);
  t.true(result.findIndex(v => v === 10) !== -1);
  t.true(result.findIndex(v => v === 23) !== -1);
  t.true(result.findIndex(v => v === 55) !== -1);
  t.true(result.findIndex(v => v === 7) !== -1);
});

test('should accurately count zero items in the doubly linked list', t => {
  const list = new DoublyLinkedList();
  t.true(list.count() === 0);
});

test('should accurately count items in the doubly linked list', t => {
  const list = new DoublyLinkedList();
  list.insert(5);
  list.insert(10);
  list.insert(23);
  t.true(list.count() === 3);
});

test('should return false when getting the kth node of an empty doubly linked list', t => {
  const list = new DoublyLinkedList();
  t.true(list.getKthNode(3) === null);
});

test('should get the kth node of a doubly linked list', t => {
  const list = new DoublyLinkedList();
  list.insert(9);
  list.insert(40);
  list.insert(65);
  t.true(list.getKthNode(3).value === 65);
  t.true(list.getKthNode(2).value === 40);
  t.true(list.getKthNode(1).value === 9);
});

test('should get the kth node of the end of a doubly linked list', t => {
  const list = new DoublyLinkedList();
  list.insert(9);
  list.insert(40);
  list.insert(0);
  list.insert(84);
  list.insert(55);
  list.insert(3);
  list.insert(23);
  t.true(list.getKthNodeFromEnd(3).value === 55);
  t.true(list.getKthNodeFromEnd(7).value === 9);
  t.true(list.getKthNodeFromEnd(5).value === 0);
  t.true(list.getKthNodeFromEnd(1).value === 23);
});

test('should return true if doubly linked list is empty', t => {
  const list = new DoublyLinkedList();
  t.true(list.isEmpty());
});

test('should return false if doubly linked list is not empty', t => {
  const list = new DoublyLinkedList();
  list.insert(84);
  list.insert(55);
  list.insert(3);
  list.insert(23);
  t.true(!list.isEmpty());
});

test('should return null if attempting to remove from an empty doubly linked list', t => {
  const list = new DoublyLinkedList();
  t.true(list.remove(23) === null);
});

test('should remove a node from a populated doubly linked list', t => {
  const list = new DoublyLinkedList();
  list.insert(84);
  list.insert(55);
  list.insert(3);
  list.insert(23);
  list.remove(3); // Remove
  const result = list.toArray();
  t.true(result.findIndex(v => v === 84) !== -1);
  t.true(result.findIndex(v => v === 55) !== -1);
  t.true(result.findIndex(v => v === 23) !== -1);
});


