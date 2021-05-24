  // 10-->5-->16

  // let myLikedList = {
  //   head:{
  //     value:10,
  //     next: {
  //       value: 5,
  //       next: {
  //         value: 16,
  //         next: null
  //       }
  //     }
  //   }
  // }
  class Node{
    constructor(value){
      this.value = value,
      this.next = null
    }
  }
  class LinkedList {
    constructor(value){
      this.head = {
        value: value,
        nextkey: "value",  null
      }
      this.tail = this.head;
      this.length = 1;
    }

    append(value){
     let newNode = new Node(value);
     this.tail.next = newNode;
     this.tail = newNode;
     this.length++;


   }
   prepend(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next;
    }
    console.log('Head:'+this.head.value)
    console.log('tail:'+this.tail.value)
    console.log('length:'+this.length)
    return array
  }

  insert(index, value){
    if(index === 0){
      this.prepend(value)
    }else
    if(index >= this.length ){
      this.append(value)
    }else
    {
      let pre = this.traversToIndex(index)
      let after = pre.next;
      let newNode = new Node(value);
      newNode.next = after;
      pre.next = newNode;
      this.length++;
    }   
  }

  traversToIndex(index){
    let currentNode = this.head;
    for(let i = 0; i < index -1; i++)
      currentNode = currentNode.next;
    return currentNode;
  }
  remove(index){
    if(index >= this.length || index < 0){
      console.log("Invalid index!, You can delete Nodes with index between 0 and " + (this.length -1) )
    }else
    if(index === 0){
      this.head = this.head.next;
      this.length--;
    }else{
      let pre = this.traversToIndex(index);
      let unwantedNode = pre.next;
      let after = unwantedNode.next;
      pre.next = after;
      this.length--;
    }
    
  }
reverse(){
  if(!this.head.next){
    return this.head
  }
  let first = this.head;
  this.tail = this.head;
  let second = first.next;

  while(second){
    const temp = second.next;
    second.next = first;
   
    first = second;
    second = temp
     console.log(this)
  }
  this.head.next = null;
  this.head = first;
}

}


const myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.prepend(1)
myLinkedList.insert(0,8)
myLinkedList.insert(6,81)
myLinkedList.insert(13,99)
myLinkedList.remove(5)
myLinkedList.printList()
      