import test from 'ava';
import { SinglyLinkedList } from './linked-list';

// test.before(() => {});
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('should insert items to linked list', t => {
  const list = new SinglyLinkedList();
  list.insertToEnd(5);
  list.insertToEnd(10);
  list.insertToEnd(23);
  list.insertToEnd(55);
  list.insertToEnd(7);
  const result = list.toArray();
  t.true(result.findIndex(v => v === 5) !== -1);
  t.true(result.findIndex(v => v === 10) !== -1);
  t.true(result.findIndex(v => v === 23) !== -1);
  t.true(result.findIndex(v => v === 55) !== -1);
  t.true(result.findIndex(v => v === 7) !== -1);
});

test('should accurately count zero items in the list', t => {
  const list = new SinglyLinkedList();
  t.true(list.count() === 0);
});

test('should accurately count items in the list', t => {
  const list = new SinglyLinkedList();
  list.insertToEnd(5);
  list.insertToEnd(10);
  list.insertToEnd(23);
  t.true(list.count() === 3);
});

test('should return false when getting the kth node of an empty linked list', t => {
  const list = new SinglyLinkedList();
  t.true(list.getKthNode(3) === null);
});

test('should get the kth node of a linked list', t => {
  const list = new SinglyLinkedList();
  list.insertToEnd(9);
  list.insertToEnd(40);
  list.insertToEnd(65);
  t.true(list.getKthNode(3).value === 65);
  t.true(list.getKthNode(2).value === 40);
  t.true(list.getKthNode(1).value === 9);
});

test('should get the kth node of the end of a linked list', t => {
  const list = new SinglyLinkedList();
  list.insertToEnd(9);
  list.insertToEnd(40);
  list.insertToEnd(0);
  list.insertToEnd(84);
  list.insertToEnd(55);
  list.insertToEnd(3);
  list.insertToEnd(23);
  t.true(list.getKthNodeFromEnd(3).value === 55);
  t.true(list.getKthNodeFromEnd(7).value === 9);
  t.true(list.getKthNodeFromEnd(5).value === 0);
  t.true(list.getKthNodeFromEnd(1).value === 23);
});

test('should return true if list is empty', t => {
  const list = new SinglyLinkedList();
  t.true(list.isEmpty());
});

test('should return false if list is not empty', t => {
  const list = new SinglyLinkedList();
  list.insertToEnd(84);
  list.insertToEnd(55);
  list.insertToEnd(3);
  list.insertToEnd(23);
  t.true(!list.isEmpty());
});


