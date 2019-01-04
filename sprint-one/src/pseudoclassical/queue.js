var Queue = function() {
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back += 1
}

Queue.prototype.dequeue = function () {
  if (this.back > this.front) {
    let temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return temp;
  }

}

Queue.prototype.size = function () {
  return Object.keys(this.storage).length
}


