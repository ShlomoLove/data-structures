class Queue {
  constructor() {
    this.front = 0; 
    this.back = 0; 
    this.storage = {};
  }

  enqueue (value) {
    this.storage[this.back] = value;
    this.back += 1; 
  }

  dequeue () {
    if (this.back > this.front) {
      let temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
      return temp; 
    }

  }

  size () {
    return Object.keys(this.storage).length
  }
}
