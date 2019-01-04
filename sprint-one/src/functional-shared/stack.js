var Stack = function() {
  let someInstance = {
    storage: {}, 
    count: 0,  
  }; 
  _.extend(someInstance, stackMethods)
  return someInstance; 
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.count] = value; 
  this.count += 1; 

};

stackMethods.pop = function (value) {
  if (this.count > 0) {
    this.count -= 1;
    let temp = this.storage[this.count];
    delete this.storage[this.count];
    return temp; 
  }

};

stackMethods.size = function (value) {
  return this.count; 

};

