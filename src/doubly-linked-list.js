import LinkedListNode from './linked-list-node';

/**
 * Doubly-linked list
 */
export default class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * Inserts a new value to the end of the linked list
   * @param  {Object} value Object to insert
   */
  insert(value) {
    const newNode = new LinkedListNode(value);
    let current = this.head;
    // Are we starting with an empty list?
    if(current === null) {
      this.head = newNode;
    }
    else {
      // Traverse until we find the end
      while(current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
  }

  /**
   * Removes the first match from the list
   * @param  {Object} value Value to remove
   * @return {LinkedListNode}   Removed node
   */
  remove(value) {
    let current = this.head;
    if(current === null) {
      return null; // List empty
    }

    while(current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    const removedNode = current.next;
    current.next = current.next.next;
    if(current.next !== null) {
      current.next.prev = current;
    }
    return removedNode;
  }

  /**
   * Returns the kth node in the list
   * @param  {Integer} k kth element
   * @return {LinkedListNode}   Node at the kth element
   */
  getKthNode(k) {
    let current = this.head;
    if(current === null) {
      return null;
    }

    let count = 1;
    while(current.next !== null && count < k) {
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
    let current = this.head;
    let runner = this.head;

    // Advnace the runner k - 1 away
    for(var i = 0; i < k - 1; i++) {
      if(runner === null) return null;
      runner = runner.next;
    }
    // Advance both pointers at the same pace
    while(runner.next !== null) {
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
    return this.head === null;
  }

  /**
   * Counts the nodes in the linked list
   * @return {Integer} Number of nodes
   */
  count() {
    let current = this.head;
    if(current === null) {
      return 0;
    }

    let count = 1;
    while(current.next !== null) {
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
  toArray(startNode = this.head) {
    let returnArr = [];
    let current = startNode;
    returnArr.push(current.value);
    while(current.next !== null) {
      current = current.next;
      returnArr.push(current.value);
    }

    return returnArr;
  }
}
