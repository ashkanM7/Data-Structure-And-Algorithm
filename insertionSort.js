const numbers = [99, 342, 35, 73, 9, 23, 12, 251]

function insertionSort(array){
  const length = array.length;
  for(let i = 0; i < length; i++){
    if(array[i] < array[0]){
      // move the number to the first position
      array.unshift(array.splice(i,1))
    }else{
      //find where number should go
      for(let j = 1; j < i; j++){
        if(array[i] > array[j - 1]&&array[i] < array[j]){
          //ove number to the right spot
          array.splice(j,0,array.splice(i,1))
        }
      }
    }
  }
}

insertionSort(number)
console.log(numbers)
