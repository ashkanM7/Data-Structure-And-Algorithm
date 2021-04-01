class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
// returns the item with the passed index
  get(index){
    return this.data[index]
  }
// adds the item to the end of the array, and return size of the new array
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
// removes and returns the last item of array
  pop(){
    const lastItem = this.data[this.length -1]
    delete this.data[this.length -1]
    this.length--
    return lastItem;
  }
// deletes the item in the passed index
  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    return item;

  }

  shiftItems(index){
    for(let i = index; i < this.length -1; i++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length-1]
    this.length--;
  }
  
}

const array = new MyArray();
array.push('hey')
array.push('you')
array.push('are')
array.push('nice')
array.push('!')
console.log(array)
//array.pop()
array.delete(1)
console.log(array)