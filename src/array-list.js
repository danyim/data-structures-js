/**
 *
 */
export class ArrayList {
  constructor() {
    this.items = [];
  }

  add(value) {

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
    return this.items.length;
  }

  toString(delimiter = ', ') {
    let returnStr = '';
    this.items.forEach(x => {
      console.log('processing', x);
      returnStr += `${returnStr}${delimiter}${x}`;
    });
    console.log('returning', returnStr);
    return returnStr;
  }
}
