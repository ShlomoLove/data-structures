

var HashTable = function() {
  this._limit = 8; 
  this._storage = LimitedArray(this._limit);
  this.elementNum = 0; 
};

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
    this.size -= 1; 
    return 
  }
  return false; 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


