const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootElement) {
      this.rootElement = newNode;
      return;
    }

    this.addNode(this.rootElement, newNode);
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) { //лево
      if (!node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else { //право
      if (!node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    let node = this.rootElement;
    while (true) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        node = node.left;
      }
      else {
        node = node.right;
      }
    }
  }

  find(data) {
    let node = this.rootElement;
    while (true) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node = node.left;
      }
      else {
        node = node.right;
      }
    }
  }




  remove(data) {
    this.rootElement = this.removeNode(this.rootElement, data);


  }

  removeNode(node, value) {
    if (!node) {
      return null
    }
    // Ищем узел для удаления в левом  и правом поддереве
    if (value < node.data) {
      node.left = this.removeNode(node.left, value);
      return node
    } else if (value > node.data) {
      node.right = this.removeNode(node.right, value);
      return node;
    }


    else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right
      }
      if (!node.right) {
        return node.left;
      }

      let minNode = node.right;

      while (minNode.left) {
        minNode = minNode.left;
      }
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);

      return node;

    }

  }


  min() {
    let node = this.rootElement;
    if (!this.rootElement) {
      return
    }
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootElement;
    if (!this.rootElement) {
      return;
    }
    while (node.right) {
      node = node.right
    }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};