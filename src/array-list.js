/**
 * Array List
 * =============================================================================
 * An array list dynamically resizes (by doubling) when the number of items
 * reaches the size of the allocated array
 *
 * Since JS arrays don't have a fixed size, we'll try to mimic an ArrayList by
 * pre-populating it to length n with null and only allowing list operations
 * where nulls exist.
 */
export class ArrayList {
  constructor() {
    this.items = [];
    this.lastIndex = -1;
  }

  /**
   * Add a value to the ArrayList.
   *
   * It will double the array's working size as soon as it reaches
   * @param {[type]} value [description]
   */
  add(value) {
    // If adding an item exceeds the length of the array..
    if(this.count() + 1 > this.items.length) {
      // console.log(`breakpoint reached; about to double. curr ${this.items.length}, target ${Math.max(this.items.length, 1) * 2}`);
      // If we're about to reach the end, double the space and append
      this.fillToLength(Math.max(this.items.length, 1) * 2);
    }
    if(this.items[this.lastIndex + 1] === null) {
      this.items[this.lastIndex + 1] = value;
      this.lastIndex++;
    }
  }

  /**
   * Artifically "lengthens" the array list by filling the workable areas of the
   * array with nulls
   * @param  {Number} targetLen Length to fill
   */
  fillToLength(targetLen) {
    if(targetLen < this.items.length) {
      throw new Error('Target length cannot be less than current length');
    }
    let currLen = this.items.length;
    for(let k = 0; k < targetLen - currLen; k++) {
      this.items.push(null);
    }
  }

  /**
   * Artifically "shortens" the array list
   * @param  {Number} targetLen Length to fill
   */
  truncToLength(targetLen) {
    if(targetLen > this.items.length) {
      throw new Error('Target length cannot be greater than current length');
    }
    if(targetLen <= this.count()) {
      throw new Error('Target length cannot be less than or equal to the workable area');
    }
    let currLen = this.items.length;
    let value = null;
    for(let k = 0; k < currLen - targetLen; k++) {
      value = this.items.pop();
    }
  }

  /**
   * Removes and returns the value at the index provided
   * @param  {Number} index Index
   * @return {Object}       Item removed at index
   */
  removeAt(index) {
    if(index >= this.count()) {
      throw new Error('Invalid index');
    }

    // Remove the element and append a null at the end
    const value = this.items.splice(index, 1)[0];
    this.items.push(null);
    this.lastIndex--;

    // If the workable area is less than half of the total allocated array,
    // truncate the size
    if(this.count() < this.items.length / 2) {
      this.truncToLength(this.items.length / 2);
    }
    return value;
  }

  /**
   * Clears the array list
   */
  clear() {
    for(let k = 0; k < this.items.length; k++) {
      delete this.items[k];
    }
    this.lastIndex = -1;
  }

  /**
   * Returns the count of items in the workable area
   * @return {Number} Number of items in the workable area
   */
  count() {
    return this.lastIndex + 1;
  }

  /**
   * Pretty prints the array list
   * @param  {String} delimiter Delimiter
   * @return {String}           String representation of the array list
   */
  toString(delimiter = ', ') {
    let returnStr = '';
    this.items.forEach(x => {
      returnStr += `${delimiter}${x}`;
    });
    return returnStr.substr(2);
  }
}
