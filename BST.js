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

    const arrayToBST = (array, start, end) => {
      if (start > end) return null;
      let mid = parseInt((start + end) / 2);
      let root = new Node(array[mid]);
      root.left = arrayToBST(array, start, mid - 1);
      root.right = arrayToBST(array, mid + 1, end);
      return root;
    };
    return arrayToBST(sortedArray, 0, sortedArray.length - 1);
  }

  insert(value, root = this.root) {
    if (root == null) {
      root = new Node(value);
      return root;
    }
    if (value < root.data) root.left = this.insert(value, root.left);
    else if (value > root.data) root.right = this.insert(value, root.right);
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
      if (root.left == null) return root.right;
      if (root.right == null) return root.left;

      // node with two children: Get the inorder
      // successor (smallest in the right subtree)
      root.data = minValue(root);
      // Delete the inorder successor
      root.right = this.delete(root.data, root.right);
    }
    return root;
  }
}

function minValue(root) {
  let min = root.data;
  while (root != null) {
    min = root.data;
    root = root.left;
  }
  return min;
}

export { Tree, Node };
