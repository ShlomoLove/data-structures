var Stack = function() {
  this.count = 0
  this.storage = {}
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
