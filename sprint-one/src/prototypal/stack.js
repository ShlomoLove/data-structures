var Stack = function() {
  let someInstance = Object.create(stackMethods);
  someInstance.count = 0
  someInstance.storage = {}
  
  return someInstance; 
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.count] = value;
  this.count += 1
}

stackMethods.pop = function () {
  if (this.count > 0) {
    this.count -= 1;
    let temp = this.storage[this.count]
    delete this.storage[this.count]
    return temp
  }
}

stackMethods.size = function () {
  return Object.keys(this.storage).length
}

