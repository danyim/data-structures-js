'use strict';

import test from 'ava';
import BTree from './btree';
import TreeNode from './btree-node';

test.before(t => {
    // this runs before all tests
});

test.after('cleanup', t => {
    // this runs after all tests
});

test.beforeEach(t => {
    // this runs before each test
});

test('creates binary tree', t => {
  var someValue = 'val';
  var node = new BTree(someValue);
  if(node.root === someValue) {
  	t.pass();
  }
  else {
  	t.fail();
  }
});

test('creates binary tree node', t => {
	var someValue = 'val';
  var node = new TreeNode(someValue);
  if(node.left !== undefined &&
  	node.right !== undefined &&
  	node.value === someValue) {
  	t.pass();
  }
  else {
  	t.fail();
  }
});

test.todo('will think about writing this later');
