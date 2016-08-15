import LinkedListNode from './linked-list-node';

/**
 * Singly-linked list
 */
export default class SinglyLinkedList {
  constructor(first = null) {
    this.first = first;
  }

  /**
   * Inserts a new value to the end of the linked list
   * @param  {Object} value Object to insert
   */
  insertToEnd(value) {
    const newNode = new LinkedListNode(value);
    let current = this.first;

    // Are we starting with an empty list?
    if(current === null) {
      this.first = newNode;
    }
    else {
      // Traverse until we find the end
      while(current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  /**
   * Returns the kth node in the list
   * @param  {Integer} k kth element
   * @return {LinkedListNOde}   Node at the kth element
   */
  getKthNode(k) {
    let current = this.first;
    if(current === null) {
      return null;
    }

    let count = 1;
    while(current.next != null && count < k) {
      current = current.next;
      count++;
    }
    return current;
  }

  /**
   * Returns the node k elements from the end of the linked list
   * @param  {Integer} k # from the end
   * @return {LinkedListNode}   kth Node from the end
   */
  getKthNodeFromEnd(k) {
    let current = this.first;
    let runner = this.first;

    // Advnace the runner k - 1 away
    for(var i = 0; i < k - 1; i++) {
      if(runner === null) return null;
      runner = runner.next;
    }
    // Advance both pointers at the same pace
    while(runner.next != null) {
      current = current.next;
      runner = runner.next;
    }
    return current;
  }

  /**
   * Returns true if list is empty
   * @return {Boolean} Returns true if list is empty
   */
  isEmpty() {
    return this.first === null;
  }

  /**
   * Counts the nodes in the linked list
   * @return {Integer} Number of nodes
   */
  count() {
    let current = this.first;
    if(current === null) {
      return 0;
    }

    let count = 1;
    while(current.next != null) {
      current = current.next;
      count++;
    }
    return count;
  }

  /**
   * Traverses the list and returns the values as an array
   * @param  {LinkedListNode} startNode Node to start the traversal
   * @return {Array}           Array containing all the traversed nodes' values
   */
  toArray(startNode = this.first) {
    let returnArr = [];
    let current = startNode;
    while(current !== null) {
      returnArr.push(current.value);
      current = current.next;
    }

    return returnArr;
  }
}
