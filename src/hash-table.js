import LinkedListNode from './linked-list-node';

/**
 * Hash tables
 */
export default class HashTable {
  constructor() {
    this.table = [];
    this.length = 0;
  }

  /**
   * Basic CRC hasing function
   * @param  {String} value Value to hash
   * @return {[type]}       [description]
   */
  hash(value) {
    let hash = 0, i, chr, len;
    if (value.length === 0) return hash;
    for (i = 0, len = value.length; i < len; i++) {
      chr = value.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash.toString().substr(0, 2);
  }

  /**
   * Inserts a key and value into the hash table
   * @param  {Object} key   Key to hash
   * @param  {Value} value Value to store
   */
  insert(key, value) {
    const hash = this.hash(key);
    const node = new LinkedListNode(value);
    if(this.table[hash] === undefined) {
      this.table[hash] = node;
    }
    else {
      let current = this.table[hash];
      while(current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  /**
   * Gets the value of the key
   * @param  {Object} key Key to retieve
   * @return {Object}     Value of the key
   */
  get(key) {
    const hash = this.hash(key);
    if(this.table[hash] === undefined) {
      return null; // Not in hash table
    }
    else {
      let current = this.table[hash];
      // This part of the hash table is open to implementation. In this case,
      // we went to the path of storing the hash table "buckets" in linked
      // lists. In this current implementation, it will always return the last
      // value in the list because we are not keeping track of keys.
      while(current.next !== null) {
        current = current.next;
      }
      return current.value;
    }
  }
}
