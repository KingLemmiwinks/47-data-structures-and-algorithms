/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.length > 0) {
      this.tail.next = newNode;
    }
    else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
    return newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;

  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    // if list is empty, throw error
    if (!current) {
      throw new Error("List is empty");
    }

    //otherwise, loop to 1 node before tail, then update and break loop
    for (let i = 1; i <= (this.length - 1 || 1); i++) {
      if (i === this.length - 1) {
        const popNode = this.tail;
        this.tail = current;
        current.next = null;
        this.length = this.length - 1;
        if (this.length === 1) this.head = current;
        return popNode.val;
      }

      if (i === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return current.val;
      }
      // pushes loop forward through nodes
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let current = this.head;

    if (!current) throw new Error("List is empty");

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return current.val;
    } else {
      const shiftNode = current;
      current = current.next;
      this.length--;
      if (this.length === 1) this.tail = current;
      this.head = current;
      return shiftNode.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;

    if (!current) throw new Error("List is empty");

    if (idx > this.length - 1)
      throw new Error("Invalid index: Greater than list length");

    if (idx < 0) throw new Error("Invalid index: Index must be at least 0");

    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        return current.val;
      }

      current = current.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;

    if (!current) throw new Error("List is empty");

    if (idx > this.length - 1)
      throw new Error("Invalid Index: Greater than list length");

    if (idx < 0) throw new Error("Invalid index: Index must be at least 0");

    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        current.val = val;
      }
      current = current.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let current = this.head;

    if (idx > this.length)
      throw new Error("Invalid Index: Greater than list length");

    if (idx < 0) throw new Error("Invalid index: Index must be at least 0");

    if (this.length === 0) {
      const newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return undefined;
    }

    for (let i = 0; i < idx; i++) {
      if (i === idx - 1) {
        const newNode = new Node(val);
        if (current.next) {
          newNode.next = current.next;
        } else {
          this.tail = newNode;
        }
        current.next = newNode;
        this.length++;
        return undefined;
      }

      current = current.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // special case: remove first item

    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);

    // special case: remove tail

    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

      // normal case: remove in middle

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
