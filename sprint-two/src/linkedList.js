var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = null; 

  list.addToTail = function(value) {
    let newNode = Node(value);
    list.length += 1; 
    
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.prev = list.tail; 
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.addToHead = function(value) {
    let newNode = Node(value);
    list.length += 1;
    if (!list.head) {
      list.head = newNode; 
      list.tail = newNode; 
    } else {
      let oldHead = list.head; 
      list.head = newNode;
      newNode.next = oldHead; 
      oldHead.prev = newNode; 
    }
  }; 

  list.removeHead = function() {
    if (!list.head) {
      return null; 
    }
    let temp = list.head;
    list.head = temp.next;
    if (list.head) {
      list.head.prev = null; 
    }
    list.length -= 1; 
    return temp.value;  
  };

  list.removeTail = function() {
    if (!list.head) {
      return null;
    }
    let prevNode = list.tail.prev;
    if (prevNode) {
      prevNode.next = null; 
      list.tail = prevNode; 
    } else {
      list.head = null; 
      list.tail = null; 
    }
    list.length -= 1; 
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
  node.prev = null; 

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
