var HashTable = function() {
  this._limit = 8; 
  this._storage = LimitedArray(this._limit);
  this.elementNum = 0; 

  // Object.defineProperty(this, 'count', {
  //   get: function () {
  //     return this.elementNum / this._limit;
  //   }
  // });
};

HashTable.prototype.count = function () {
  return this.elementNum / this._limit; 
}

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);

  let pair = {
    key: k,
    value: v, 
    next: null,
  }

  if (bucket) {
    if (bucket.key === k) {
      bucket.value = v;
    }
    while (!bucket.next === undefined) {
      if (bucket.key === k) {
        bucket.value = v;
      }
      bucket = bucket.next
    }
    bucket.next = pair;
  } else {
    this._storage.set(index, pair)
  }
  this.elementNum += 1
  if (this.count () > .75) {
    this.resize(Math.floor(this._limit * 2))
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index)
  if (!bucket) {
    return undefined;
  } else {
    if (bucket.key === k) {
      return bucket.value;
    }
    while (bucket.next !== null) {
      bucket = bucket.next
    } if (bucket.key === k) {
      return bucket.value;
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket === undefined) {
    return null; 
  }
  if (bucket.key === k) {
    if (bucket.next !== null) {
      this._storage.set(index, bucket.next)
    }
  } else {
    while (!bucket.next === undefined) {
      let lastPair = bucket;
      bucket = bucket.next;
      if (bucket.key === k) {
        lastPair.next = bucket.next
      }
    }
  }
  if (bucket.key === k) {
    bucket.value = undefined;
    this.elementNum -= 1;
    if (this.count () < .25) {
      this.resize(Math.ceil(this._limit / 2));
    } 
    return;
  }
  return false; 
};

HashTable.prototype.resize = function (limit) {
  this._limit = limit; 
  let previousStorage = this._storage; 
  this._storage = LimitedArray(this._limit);
  this.elementNum = 0; 

  previousStorage.each (obj => {
    if (obj && obj.value) {
      this.insert (obj.key, obj.value);
      while (obj.next) {
        obj = obj.next;
        this.insert(obj.key, obj.value)
      }
    }
  });
}
/*
 * Complexity: What is the time complexity of the above functions?
 */


