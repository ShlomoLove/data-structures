let BinarySearchTree = function (value) {
    let binaryTree = Object.create(BinarySearchTree.prototype)
    binaryTree.value = value; 
    binaryTree.right = null;
    binaryTree.left = null;
    return binaryTree;
  };

BinarySearchTree.prototype.insert = function (value) {
  let newTree = BinarySearchTree(value)
  if (value > this.value) {
    if (this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(value)
    } 
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function (value) {
  let containsValue = false
  let treeSearch = this
  while (treeSearch) {
    if (treeSearch.value === value) {
      containsValue = true
    }
    if (value > this.value) {
      treeSearch = treeSearch.right
    } else if (value < this.value) {
      treeSearch = treeSearch.left
    }
  } 
  return containsValue;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value)
  if (this.left !== null) {
    this.left.depthFirstLog(cb)
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
