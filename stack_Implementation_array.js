

class Stack{
  constructor(){
   this.array = []
  }

  peek(){
    return this.array[this.array.length -1 ]
  }

  push(value){
    this.array.push(value);
    return this;

  }

  pop(){
    if(this.array.length === 0){
      return null;
    }
     const top = this.array[this.array.length - 1]
      this.array.pop() 
      return top;
  }

  // isEmpty(){
  //   return this.length === 0;

  // }

}

const myStack = new Stack()
myStack.push('google')
myStack.push('youtube')
myStack.push('facebook')
// myStack.peek()
//  myStack.pop()
// myStack.pop()



