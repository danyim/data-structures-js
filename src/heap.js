/**
 * Binary Heap
 * ============================================================================
 * A heap is a specialized tree-based data structure that satisfies the heap
 * property: If A is a parent node of B then the key (the value) of node A is
 * ordered with respect to the key of node B with the same ordering applying
 * across the heap.
 *
 * This particular implementation is done in an array.
 * You may turn this implementation into a max heap (default) or a min heap by
 * depending on the comparator function passed into the constructor.
 */
export default class Heap {
  constructor(comp = this.defaultComparator) {
    this.heap = [];
    this.comp = comp;
  }

  /**
   * Default comparator for creating a max heap
   * @param  {Object} a
   * @param  {Object} b
   * @return {Boolean}
   */
  defaultComparator(a, b) {
    return a > b;
  }

  /**
   * Swap array values at indicies a and b
   * @param  {Integer} a Index of swap value
   * @param  {Integer} b Index of swap value
   */
  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  /**
   * Bubbles up a value in the heap
   * @param  {Integer} i Index to "bubble up"
   */
  bubbleUp(i) {
    if (i <= 0) {
      return;
    }
    const parent = Math.floor((i - 1) / 2);
    if (this.comp(this.heap[i], this.heap[parent])) {
      this.swap(i, parent);
      this.bubbleUp(parent);
    }
  }

  /**
   * Bubbles down a value in the heap
   * @param  {Integer} i Index to "bubble down"
   */
  bubbleDown(i) {
    // console.log('bubbling down', this.heap[i]);
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child
    let largest = i; // Root
    if (left < this.heap.length && this.comp(this.heap[left], this.heap[largest])) {
      console.log('large left');
      largest = left;
    }
    if (right < this.heap.length && this.comp(this.heap[right], this.heap[largest])) {
      console.log('large right');
      largest = right;
    }
    if (largest !== i) {
      this.swap(largest, i);
      this.bubbleDown(largest);
    }
  }

  /**
   * Insert a value into the heap
   * @param  {Integer} value Value to insert
   */
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  /**
   * Extract the value at the root and rebuild the heap
   * @return {Object} Value of root
   */
  extract() {
    if(this.heap.length === 0) {
      return null;
    }
    const root = this.heap[0];
    const last = this.heap.length - 1;
    this.heap[0] = this.heap[last];
    this.heap.length = last;
    if(last > 0) {
      this.bubbleDown(0);
    }
    return root;
  }

  /**
   * Returns the size of the heap
   * @return {Integer} Size of heap
   */
  size() {
    return this.heap.length;
  }
}
