class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stakc is empty");
    }
    return this.items[this.items.length - 1];
  }

  length() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.length());
console.log(stack.peek());
console.log(stack.isEmpty());
