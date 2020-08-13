// const sortStack = require("./index").;
const createGraph = require("../../helper/directed-graph").createGraph;

const graph = createGraph([{
  name: "1",
  children: ["2"]
}, {
  name: "2",
},]);

console.log(graph);
console.log(graph.nodes[0].children);


// describe("Test sortStack method", function () {
  // it("[2, 3, 1, 5] will be [5, 3, 2, 1]", function () {
  //   const stack = new Stack();
  //   stack.push(2).push(3).push(1).push(5);
  //   sortStack(stack);
  //   expect(stack.pop()).toBe(1);
  //   expect(stack.isEmpty()).toBeTrue();
  // });
// });
