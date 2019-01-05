var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value); 
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    let nextNode = list.head;
    list.head = list.head.next;
    return nextNode.value
  };

  list.contains = function(target) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.value === target) return true
        currentNode = currentNode.next 
    }
    return false; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
