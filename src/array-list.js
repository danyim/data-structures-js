/**
 * ArrayList
 */
export class ArrayList {
  constructor() {
    this.items = [];
    this.lastIndex = -1;
  }

  add(value) {
    // Since JS arrays don't have a fixed size, we'll try to mimic an ArrayList
    // by pre-populating it to length n with null and only allowing list
    // operations where nulls exist
    // if(this.count() === 0) {
    //   // This is the first element to be added, so fill to n = 2
    //   this.fillToLength(2);
    //   this.items[0] = value;
    //   this.lastIndex = 0;
    // }
    // else {
    //   if(this.count() + 1 > this.items.length) {
    //     // If we're about to reach the end, double the space and append
    //     this.fillToLength(Math.max(this.items.length, 1) * 2);
    //   }
    // }

    console.log('before:', this.toString());
    if(this.count() + 1 > this.items.length) {
      // If we're about to reach the end, double the space and append
      this.fillToLength(Math.max(this.items.length, 1) * 2);
      console.log(`breakpoint reached; about to double. curr ${this.items.length}, target ${Math.max(this.items.length, 1) * 2}`);
    }
    this.items[this.lastIndex + 1] = value;
    this.lastIndex++;
    // console.log(`lastIndex: ${this.lastIndex}`);
    console.log('after:', this.toString());
    console.log('______________________');
  }

  /**
   * Artifically lengthens the array by filling with nulls
   * @param  {Number} length Length to fill to
   */
  fillToLength(length) {
    if(length < this.items.length) {
      throw new Error('Target length cannot be less than current length');
    }
    let currentLength = this.items.length;
    for(let k = 0; k < length - currentLength; k++) {
      this.items.push(null);
      // console.log(`k: ${k}, length: ${length}, this.items.length: ${this.items.length}`);
      // console.log(this.items);
    }
    // this.items.fill(null, this.items.length - 1, length - this.items.length);
  }

  remove(value) {

  }

  removeRange(firstIndex, lastIndex) {

  }

  clear() {
    for(let k = 0; k < this.items.length; k++) {
      delete this.items[k];
    }
  }

  count() {
    return this.lastIndex + 1;
  }

  toString(delimiter = ', ') {
    let returnStr = '';
    this.items.forEach(x => {
      // console.log('processing', x);
      returnStr += `${returnStr}${delimiter}${x}`;
    });
    // console.log('returning', returnStr);
    return returnStr.substr(2);
  }
}
