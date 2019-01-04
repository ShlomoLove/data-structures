var Queue = function() {
  let someInstance = Object.create(queueMethods)
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back += 1;
}

queueMethods.dequeue = function () {
  if (this.back > this.front) {
    let temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return temp; 
  }

}

queueMethods.size = function () {
  return Object.keys(this.storage).length
}


