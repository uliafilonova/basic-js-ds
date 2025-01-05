const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.count = 0;
  }


  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.front === null) {
      this.front = node
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }

    this.count++;

    return this;
  }


  dequeue() {
    if (this.front === null) {
      return null;
    }

    const value = this.front.value;

    this.front = this.front.next

    if (this.front === null) {
      this.back = null;
    }

    this.count--;

    return value;
  }
}





module.exports = {
  Queue
};
