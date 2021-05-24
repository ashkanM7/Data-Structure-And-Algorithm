class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    return this.first;

  }

  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){
    const holdingPointer = this.first;
    if(this.length === 0){
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Ashk");
myQueue.enqueue("Noush");
myQueue.enqueue("Jan");
myQueue.enqueue("Lin");
myQueue.dequeue()
myQueue.peek()
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
