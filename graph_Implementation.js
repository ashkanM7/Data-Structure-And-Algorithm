// //Edge List
// const graph = [[1,2],[2,3],[2,4],[3,4]]

// //Adjacent List
// const graph2 = [{1:[2]},{2:[1,3,4]},{3:[2,4]},{4:[2,3]}]

// //Adjacent Matrix
// const graph3 = [
// 1:[0,1,0,0],
// 2:[1,0,1,1],
// 3:[0,1,0,1],
// 4:[0,1,1,0]
// ]

class Graph{
  constructor(){
    this.numberOfNodes = 0;
    this.adjacentList = {}
  }

  addVertex(node){
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    //return this;

  }

  addEdge(node1,node2){
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return this;

  }
}

const myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdge(0,2);
myGraph.addEdge(0,3);
myGraph.addEdge(0,4);
myGraph.addEdge(0,5);