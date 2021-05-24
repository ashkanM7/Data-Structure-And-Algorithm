class HashTable{
	constructor(size){
		this.data = new Array(size);
	}

	_hash(key){
		let hash = 0;
		for(let i = 0; i < key.length; i++){
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
     this.data[address].push([key, value]);
     
	}

	
		get(key){
		let address = this._hash(key);
		let currentBlock = this.data[address];
		if(currentBlock){
			for(let i = 0; i < currentBlock.length; i++){
				return currentBlock[i][1];
			}
		}
		return undifined;
	}

  keys(){
    let keysArray = []
    for(let i =  0; i < this.data.length; i++){
      if(this.data[i]){
        if(this.data[i].length >= 1){
          for(let j = 0; j < this.data[i].length; j++){
            keysArray.push(this.data[i][j][0])
          }
        }else{
            keysArray.push(this.data[i][0][0])
        }
        
      }
    }
    return keysArray;
  }
	}



const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000);
myHashTable.get('grapes');
myHashTable.set('apple', 9);
myHashTable.get('apple');
myHashTable.set('tangerin',8);
myHashTable.get('tangerin')
console.log(myHashTable.keys())
console.log(myHashTable)