'use strict';

import test from 'ava';
import BTree from './btree-tree';
import TreeNode from './btree-node';

// test.before(t => { ... });
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('creates binary tree', t => {
  let myRoot = 'val';
  let tree = new BTree(myRoot);
  t.true(tree.root === myRoot);
});

test('creates binary tree node', t => {
  let someValue = 'val';
  let node = new TreeNode(someValue);
  t.true(node.left !== undefined && node.right !== undefined && node.value === someValue);
});

test('prints tree nodes', t => {
  let tree = new BTree();
  t.true(tree.toString !== 'undefined' && tree.toString() !== '');
});

test('inserts first value as root', t => {
  let tree = new BTree();
  tree.insert(25);
  t.true(tree.root !== null && tree.root.value === 25);
});

test('inserts two values', t => {
  let tree = new BTree();
  tree.insert(25);
  tree.insert(15);
  t.true(tree.root.left !== null && tree.root.left.value === 15);
});

test('destroys the entire tree', t => {
  let tree = new BTree();
  tree.insert(25);
  tree.insert(15);
  tree.insert(10);
  tree.insert(35);
  // console.log('before\n', tree.toString());
  tree.destroy();
  // console.log('after\n', tree.toString());
  t.true(tree.root === null);
});

test('destroys a subtree', t => {
  const tree = new BTree();
  tree.insert(25);
  tree.insert(15);
  tree.insert(10);
  tree.insert(17);
  const destroyed = tree.search(15);
  // console.log('before\n', tree.toString());
  tree.destroy(destroyed);
  // console.log('after\n', tree.toString());
  t.true(tree.root !== null);
});

test('searches for and finds a value', t => {
  let tree = new BTree();
  tree.insert(25);
  tree.insert(15);
  tree.insert(10);
  tree.insert(35);
  const search = tree.search(15);
  t.true(search.value === 15);
});

test('counts # of nodes', t => {
  let tree = new BTree();
  tree.insert(25);
  tree.insert(15);
  tree.insert(10);
  tree.insert(35);
  tree.insert(234);
  tree.insert(123);
  const count = tree.countAll();
  t.true(count === 6);
});

// test.todo('searches for value');
