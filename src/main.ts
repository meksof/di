///////// MAIN FILE
// import { Concat } from './concat';
// import { myFilter } from './filter';
// import { main } from './manage-chain-branches';
import {Stack} from './stack';
// main()

let stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(7);
stack.print();
console.log('-----------------------')
stack.pop();
stack.print();

////////////////////////////
