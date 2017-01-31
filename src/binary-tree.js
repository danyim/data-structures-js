/**
 * Binary Tree Node
 */
export class TreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

/**
 * Binary Tree
 * =============================================================================
 */
export class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.DEBUG = false;
  }

  /**
   * count the number of nodes in a subtree
   * @param  {TreeNode} start count here
   * @return {Integer} count of nodes in tree
   */
  count(node) {
    if (!node) {
      return 0;
    }
    return 1 + this.count(node.left) + this.count(node.right);
  }

  /**
   * count the number of nodes in the entire tree
   * @return {Integer} count of nodes in tree
   */
  countAll() {
    if (!this.root) {
      return 0;
    }
    return this.count(this.root);
  }

  /**
   * inserts a value into the tree
   * @param  {value}
   */
  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.insertRecursive(value, this.root);
    }
  }

  /**
   * recursively inserts a value into the tree
   * @param  {value}
   * @param  {TreeNode}
   */
  insertRecursive(value, node = this.root) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this.insertRecursive(value, node.left);
      }
    } else if (value >= node.value) {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this.insertRecursive(value, node.right);
      }
    }
  }

  /** destroys the entire tree or all of a node's children
   * @param  {TreeNode}
   */
  destroy(node = this.root) {
    if (node !== null) {
      this.destroy(node.left);
      this.destroy(node.right);
      node.left = null;
      node.right = null;
    }
    if (node === this.root) {
      this.root = null;
    }
  }

  /**
   * binary search algorithm: searches for a value in the tree
   * @param  {object} key to search for
   * @param  {TreeNode} node to search
   * @return {TreeNode} node to find
   */
  search(key, node = this.root) {
    if (node !== null) {
      if (key === node.value) {
        return node;
      }
      if (key < node.value) {
        return this.search(key, node.left);
      }
      return this.search(key, node.right);
    }

    return null;
  }

  /**
   * prints all the nodes of this tree
   * @param  {TreeNode} node to start printing or null for entire tree
   * @param  {string} used for recursive call to indent
   * @return {string}
   */
  toString(node = this.root, prefix = '') {
    let str = '';
    if (node === null) {
      if (node === this.root) {
        str += `${prefix}+- <null>\r\n`;
      }
      return str;
    }
    str += `${prefix}+- ${node.value}\r\n`;
    const left = this.toString(node.left, `${prefix}|  `);
    const right = this.toString(node.right, `${prefix}|  `);

    return `${str}${left}${right}`;
  }

  // TODO: Work on tree balancing
  // balance() {

  // }

  // TODO: Work on tree balancing
  /**
   * Checks if the tree is unbalanced
   * @return {Boolean} Returns true if unbalanced
   */
  // isUnbalanced(node = this.root, distance = 0) {
  //   if(node.left) {

  //   }
  // }

  /**
   * Iterative implementation of a depth-first search algorithm. This generator
   * function will walk through the tree via DFS until the value is found
   * @param {TreeNode} node The node to begin the search
   * @param {Number}   v    Value to find or null if you want to just iterate
   */
  static *DFS(node = null, v = null) {
    if(!node) return;
    let nodesToVisit = [node];
    let currentNode = null;
    while(nodesToVisit.length > 0) {
      currentNode = nodesToVisit.shift(); // Removes and returns the first node

      // Prepend the children if they're not null
      nodesToVisit = [
        ...(currentNode.left !== null ? [currentNode.left] : []),
        ...(currentNode.right !== null ? [currentNode.right] : []),
        ...nodesToVisit
      ];

      yield currentNode;

      // Check if we found our value
      if(v && currentNode.value === v) {
        break;
      }
    }
  }

  /**
   * Iterative implementation of a breadth-first search algorithm. This generator
   * function will walk through the tree via BFS until the value is found
   * @param {TreeNode} node The node to begin the search
   * @param {Number}   v    Value to find or null if you want to just iterate
   */
  static *BFS(node = null, v = null) {
    if(!node) return;
    let nodesToVisit = [node];
    let currentNode = null;
    while(nodesToVisit.length > 0) {
      currentNode = nodesToVisit.shift(); // Removes and returns the first node

      // Append the children if they're not null
      nodesToVisit = [
        ...nodesToVisit,
        ...(currentNode.left !== null ? [currentNode.left] : []),
        ...(currentNode.right !== null ? [currentNode.right] : [])
      ];
      yield currentNode;

      // Check if we found our value
      if(v && currentNode.value === v) {
        break;
      }
    }
  }
}
