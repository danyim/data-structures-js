export class QueueNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * Classic queue w/ FIFO (first-in, first-out)
 */
export class Queue {
  constructor(first = null, last = null) {
    this.first = first;
    this.last = last;
  }

  /**
   * Adds an item to the queue
   * @param {Object} item data of the item to insert
   */
  add(item) {
    const node = new QueueNode(item);
    if(this.last !== null) {
      this.last.next = node;
    }
    this.last = node;
    if(this.first === null) {
      this.first = this.last;
    }
  }

  /**
   * Removes the first item off the queue
   * @return {Object} Data property of the queue item
   */
  remove() {
    if(this.isEmpty()) {
      return null;
    }
    const data = this.first.data;
    this.first = this.first.next;
    if(this.first === null) {
      this.last = null;
    }

    return data;
  }

  /**
   * Returns the value of the first item without disturbing the queue
   * @return {Object} Value of first item
   */
  peek() {
    if(this.isEmpty()) {
      return null;
    }
    return this.first.data;
  }

  /**
   * Returns true if queue is empty
   * @return {Boolean} True if empty
   */
  isEmpty() {
    return this.first === null;
  }

  /**
   * Returns an array of the queue items
   * @return {Array} All items
   */
  toArray() {
    let curr = this.first;
    let returnArr = [];
    while(curr !== null) {
      returnArr.push(curr);
      curr = curr.next;
    }

    return returnArr;
  }
}
