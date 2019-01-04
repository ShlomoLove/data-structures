var Stack = function() {
  this.count = 0
  this.storage = {}
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count += 1;
}

Stack.prototype.pop = function () {
  if (this.count > 0) {
    this.count -= 1;
    let temp = this.storage[this.count];
    delete this.storage[this.count];
    return temp; 
  }
}

Stack.prototype.size = function () {
  return Object.keys(this.storage).length
}
