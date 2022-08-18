class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }
  buildTree(array) {
    //create new array order without duplicate
    let sortedArray = [
      ...new Set(
        array.sort(function (a, b) {
          return a - b;
        })
      ),
    ];
    return arrayToBST(sortedArray, 0, sortedArray.length - 1);
  }

  insert(value, root = this.root) {
    if (root == null) {
      root = new Node(value);
      return root;
    }
    if (value < root.data) root.left = this.insert(value, root.left);
    if (value > root.data) root.right = this.insert(value, root.right);
    return root;
  }

  delete(value, root = this.root) {
    if (root == null) {
      return root;
    }
    if (root.data === value) {
      root = null;
      return null;
    }
    if (value < root.data) root.left = this.delete(value, root.left);
    else if (value > root.data) root.right = this.delete(value, root.right);
    else {
      // node with only one child or no child
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      // node with two children: Get the inorder
      // successor (smallest in the right subtree)
      root.data = minValue(root);
      // Delete the inorder successor
      root.right = this.delete(root.data, root.right);
    }
    return root;
  }

  find(value, root = this.root) {
    if (root === null) {
      return "Value not found";
    }

    if (root.data === value) {
      return root;
    }
    if (value < root.data) return this.find(value, root.left);
    else if (value > root.data) return this.find(value, root.right);
  }

  levelOrder(root) {
    if (root === null) return;
    let result = [];
    let queue = [root];

    while (queue.length > 0) {
      let current = queue.shift(root);
      result.push(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }

  preorder(root, result = []) {
    if (root === null) return;
    result.push(root.data);
    if (root.left) this.preorder(root.left, result);
    if (root.right) this.preorder(root.right, result);
    return result;
  }

  inorder(root, result = []) {
    if (root === null) return;
    if (root.left) this.inorder(root.left, result);
    result.push(root.data);
    if (root.right) this.inorder(root.right, result);
    return result;
  }

  postorder(root, result = []) {
    if (root === null) return;
    if (root.left) this.postorder(root.left, result);
    if (root.right) this.postorder(root.right, result);
    result.push(root.data);
    return result;
  }

  height(root) {
    if (root === null) return -1;
    let left = this.height(root.left);
    let right = this.height(root.right);
    return Math.max(left, right) + 1;
  }

  isBalanced(root) {
    if (root === null) return false;
    if (Math.abs(this.height(root.left) - this.height(root.right)) > 1) {
      return false;
    } else {
      return true;
    }
  }

  rebalance() {
    if (this.isBalanced(this.root)) return this.root;
    let array = this.preorder(this.root);
    let balancedTree = new Tree(array);
    console.log(balancedTree);
    return balancedTree;
  }
}

const arrayToBST = (array, start, end) => {
  if (start > end) return null;
  let mid = parseInt((start + end) / 2);
  let root = new Node(array[mid]);
  root.left = arrayToBST(array, start, mid - 1);
  root.right = arrayToBST(array, mid + 1, end);
  return root;
};

const minValue = (root) => {
  let min = root.data;
  while (root != null) {
    min = root.data;
    root = root.left;
  }
  return min;
};

export { Tree, Node };
