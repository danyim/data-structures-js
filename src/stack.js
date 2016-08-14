export class StackNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * Classic stack w/ LIFO (last-in, first-out)
 */
export class Stack {
  constructor(top = null) {
    this.top = top;
  }

  /**
   * Pushes an item to the stack
   * @param {Object} item data of the item to insert
   */
  push(item) {
    const node = new StackNode(item);
    node.next = this.top;
    this.top = node;
  }

  /**
   * Pops the first item off the stack
   * @return {Object} Data property of the stack item
   */
  pop() {
    if(this.isEmpty()) {
      return null;
    }
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  /**
   * Returns the value of the first item without disturbing the stack
   * @return {Object} Value of first item
   */
  peek() {
    if(this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }

  /**
   * Returns true if stack is empty
   * @return {Boolean} True if empty
   */
  isEmpty() {
    return this.top === null;
  }

  /**
   * Returns an array of the stack items
   * @return {Array} All items
   */
  toArray() {
    let curr = this.top;
    let returnArr = [];
    while(curr !== null) {
      returnArr.push(curr);
      curr = curr.next;
    }

    return returnArr;
  }
}
