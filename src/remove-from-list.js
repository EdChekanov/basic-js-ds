const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example.0
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let linkedList = l;
  while (linkedList) {
    if (linkedList.value === k) {
      linkedList.value = linkedList.next.value;
      linkedList.next = linkedList.next.next;
    } else {
      if (linkedList.next) {
        if (!linkedList.next.next && linkedList.next.value === k) {
          linkedList.next = null;
          return l;
        }
      }
      linkedList = linkedList.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList,
};
