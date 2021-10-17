const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.basis = null;
  }

  root() {
   return this.basis;
  }

  add( data ) {
    this.basis = addIn(this.basis, data);

    function addIn(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      data < node.data ? node.left = addIn(node.left, data) : node.right = addIn(node.right, data);
      return node;
    }

  }

  has( data ) {
    return searchIn(this.basis, data);

    function searchIn(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchIn(node.left, data) : searchIn(node.right, data);
    }
  }

  find( data ) {
    return searchIn(this.basis, data);

    function searchIn(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? searchIn(node.left, data) : searchIn(node.right, data);
    }
  }

  remove( data ) {
    this.basis = removeNode(this.basis, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

         if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.basis) {
      return null;
    }

    let node = this.basis;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.basis) {
      return null;
    }

    let node = this.basis;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}