class Node{
  constructor(value){
     this.value = value
    this.right = null;
    this.left = null;
   
  }
  
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
    }else{
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this
          }
          currentNode = currentNode.left;
        }else{
          //RIGHT
          if(!currentNode.right){
            currentNode.right = newNode;
            return this
          }
          currentNode = currentNode.right;
        }
      }
    }
   return this;
  }

  lookUp(value){
    if(!this.root)
    return null;

    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      }else if(value > currentNode.value){
          currentNode = currentNode.right;
      }else if(currentNode.value === value){
        return currentNode;
      }
    }
    return null;
  }


 remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }


}

const myTree = new BinarySearchTree()
myTree.insert(9)
myTree.insert(4)
myTree.insert(12)
myTree.insert(7)
myTree.insert(20)
myTree.insert(11)
myTree.insert(2)
myTree.insert(180)
myTree.insert(5)
myTree.lookUp(4)
myTree.remove(9)