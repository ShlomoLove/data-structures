var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let front = 0;
  let back = 0; 

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back += 1;  
  };

  someInstance.dequeue = function() {
    if (back > front) {
      let temp = storage[front]
      delete storage[front]
      front += 1
      return temp; 
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
