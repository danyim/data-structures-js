import test from 'ava';
import BinaryTree from './btree-tree';
import TreeNode from './btree-node';

// test.before(t => { ... });
// test.after('cleanup', t => { ... });
// test.beforeEach(t => { ... });

test('creates binary tree', t => {
  const myRoot = 'val';
  const tree = new BinaryTree(myRoot);
  t.true(tree.root === myRoot);
});

test('creates binary tree node', t => {
  const someValue = 'val';
  const node = new TreeNode(someValue);
  t.true(node.left !== undefined && node.right !== undefined && node.value === someValue);
});

test('prints empty string', t => {
  const tree = new BinaryTree();
  t.true(tree.toString().includes('<null>'));
});

test('prints tree nodes', t => {
  const tree = new BinaryTree();
  tree.insert(25);
  t.true(tree.toString().includes('25'));
});

test('inserts first value as root', t => {
  const tree = new BinaryTree();
  tree.insert(25);
  t.true(tree.root !== null && tree.root.value === 25);
});

test('inserts two values', t => {
  const tree = new BinaryTree();
  tree.insert(25);
  tree.insert(15);
  t.true(tree.root.left !== null && tree.root.left.value === 15);
});

test('destroys the entire tree', t => {
  const tree = new BinaryTree();
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
  const tree = new BinaryTree();
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
  const tree = new BinaryTree();
  tree.insert(25);
  tree.insert(15);
  tree.insert(10);
  tree.insert(35);
  const search = tree.search(15);
  t.true(search.value === 15);
});

test('searches for and doesn\'t find value', t => {
  const tree = new BinaryTree();
  tree.insert(25);
  tree.insert(15);
  tree.insert(10);
  tree.insert(35);
  t.true(tree.search(4) === null && tree.search(19) === null);
});

test('counts # of nodes and returns value', t => {
  const tree = new BinaryTree();
  tree.insert(25);
  tree.insert(15);
  tree.insert(10);
  tree.insert(35);
  tree.insert(234);
  tree.insert(123);
  const count = tree.countAll();
  t.true(count === 6);
});

test('counts # of nodes on empty tree and returns 0', t => {
  const tree = new BinaryTree();
  const count = tree.countAll();
  t.true(count === 0);
});

test('performs a depth-first traversal correctly', t => {
  const tree = new BinaryTree();
  tree.insert(15);
  tree.insert(10);
  tree.insert(3);
  tree.insert(11);
  tree.insert(20);
  tree.insert(34);

  const results = [];
  for(let v of BinaryTree.DFS(tree.root)) {
    results.push(v.value);
  }

  const resultsString = results.join(',');
  t.true(resultsString === '15,10,3,11,20,34');
});

test('performs a breadth-first traversal correctly', t => {
  const tree = new BinaryTree();
  tree.insert(15);
  tree.insert(10);
  tree.insert(3);
  tree.insert(11);
  tree.insert(20);
  tree.insert(34);

  const results = [];
  for(let v of BinaryTree.BFS(tree.root)) {
    results.push(v.value);
  }

  const resultsString = results.join(',');
  t.true(resultsString === '15,10,20,3,11,34');
});

test.todo('searches for value using depth-first search');
test.todo('searches for value using breadth-first search');
test.todo('searches for value');
test.todo('rebalances an unbalanced tree');
