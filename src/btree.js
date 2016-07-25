'use strict';

import BTree from './btree-tree';
import TreeNode from './btree-node';

let root = new TreeNode(24);
let tree = new BTree(root);
tree.insert(13);
tree.insert(29);
tree.insert(11);
tree.insert(15);
tree.insert(16);
console.log(tree.toString());
