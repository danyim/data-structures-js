import TreeNode from './btree-node';

/**
 * Binary Tree
 */
export default class BinaryTree {
  constructor(root = null) {
    this.root = root;
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

  /*
    // Old implementation without fancy lines
    toString() {
      if (!this.root) {
        return;
      }
      let returnString = '';
      let nodesQueue = [];
      let nodesInCurrentLevel = 1;
      let nodesInNextLevel = 0;

      nodesQueue.push(this.root);
      while (nodesQueue.length !== 0) {
        let currNode = nodesQueue[0];
        nodesQueue = nodesQueue.slice(1, nodesQueue.length);
        nodesInCurrentLevel--;
        if (currNode !== null && currNode !== 'undefined') {
          returnString += currNode.value + ' ';
          nodesQueue.push(currNode.left);
          nodesQueue.push(currNode.right);
          nodesInNextLevel += 2;
        }
        if (nodesInCurrentLevel === 0) {
          returnString += '\r\n';
          nodesInCurrentLevel = nodesInNextLevel;
          nodesInNextLevel = 0;
        }
      }
      return returnString;
    }
   */

  /**
   * @param  {TreeNode}
   */
  // remove(node) {

  // }
}
