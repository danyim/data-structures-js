/**
 * Linked list node
 */
export default class LinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
