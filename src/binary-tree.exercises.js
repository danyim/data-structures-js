import { BinaryTree, TreeNode } from './binary-tree';

const root = new TreeNode(24);
const tree = new BinaryTree(root);
tree.insert(13);
tree.insert(29);
tree.insert(11);
tree.insert(15);
tree.insert(16);
console.log(tree.toString());

console.log('performing DFS');
for(let v of BinaryTree.DFS(tree.root)) {
  console.log(v.value);
}

console.log('performing BFS');
for(let v of BinaryTree.BFS(tree.root)) {
  console.log(v.value);
}

console.log('BFS(16):');
for(let v of BinaryTree.BFS(tree.root, 16)) {
  console.log(v.value);
}

console.log('BFS(11):');
for(let v of BinaryTree.BFS(tree.root, 11)) {
  console.log(v.value);
}
