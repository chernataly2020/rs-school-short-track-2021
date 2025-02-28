const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  // Adds a value to the end of the chain
  enqueue(element) {
    const node = new ListNode(element);
    if (this.head) { // if the first Node exitsts
      this.tail.next = node; // inserts the created node after the tail of our Queue
      this.tail = node; // now the created node is the last node
    } else { // if there are no nodes in the Queue
      this.head = node; // the created node is a head
      this.tail = node; // also the created node is a tail in Queue because it is single.
    }
    this.length++; // increases the length of Queue by 1
  }

  // Removes a value from the beginning of the chain
  dequeue() {
    const current = this.head; // saves the link to the head which we need to remove
    this.head = this.head.next; // moves the head link to the second Node in the Queue
    this.length--; // decreaments the length of our Queue

    return current.value; // returns the removed Node's value
  }
}
module.exports = Queue;
