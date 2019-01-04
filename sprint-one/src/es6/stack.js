class Stack {
    constructor() {
      this.count = 0;
      this.storage = {}
  }
  
  push(value) {
    this.storage[this.count] = value;
    this.count += 1; 
  }

  pop () {
    if (this.count > 0) {
      this.count -= 1
      let temp = this.storage[this.count];
      delete this.storage[this.count];
      return temp; 
    }
  }

  size () {
    return Object.keys(this.storage).length
  }
}