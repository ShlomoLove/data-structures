var Tree = function(value) {
  var newTree = {
    value: value, 
    children: [],
  };
  _.extend(newTree, treeMethods)
  // your code here
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value))
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true; 
  }

  if (this.children.length > 0) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true; 
      }
    }
  }
  return false; 
};

treeMethods.maxDepth = function () {
  let depth = 0;
  if (this.children) {
    let counter = 1; 
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value){
        counter += 1
        if (counter > depth) {
          depth = counter; 
        }
        this.children[i].maxDepth();
      }
    } 
  } 
  return 1 + depth; 
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
