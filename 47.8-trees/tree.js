/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let queue = [this.root];
    let sum = 0;
    while (queue.length > 0) {
      let node = queue.shift();
      sum += node.val;
      for (let i of node.children) {
        queue.push(i);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let queue = [this.root]
    let nodeCount = 0;
    while (queue.length > 0) {
      let node = queue.shift();
      if(node.val % 2 == 0) {
        nodeCount++;
      }
      for (let i of node.children) {
        queue.push(i);
      }
    }
    return nodeCount;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let queue = [this.root];
    let nodeCount = 0;
    while (queue.length > 0) {
      let node = queue.shift();
      if (node.val > lowerBound) {
        nodeCount++
      }
      for (let i of node.children) {
        queue.push(i);
      }
    }
    return nodeCount;
  }
}

module.exports = { Tree, TreeNode };
