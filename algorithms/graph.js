const Node = require("./node");

/**
 * Building this graph
 *
 *       morfar
 *         |
 *        mor
 *       __|__
 *      |     | (edge)
 *     mig   sis (vertice)
 *
 */
const morfar = new Node("morfar");
const mor = new Node("mor");
const mig = new Node("mig");
const søs = new Node("sis");
morfar.connect(mor);
mor.connect(mig);
mor.connect(søs);

/**
 * Do a breadth first search
 */
function breadth_first_search(start_node, query) {
  let queue = start_node.connections; // add start node to the queue
  const checked_nodes = [];
  while (queue.length > 0) {
    // remove the node we are checking from the queue ( and possible add its children down the line )
    const node = queue.shift();
    //check if this has been checked
    if (checked_nodes.indexOf(node.value) === -1) {
      if (node.value === query) {
        return node; // We found what we are looking for, return found node
      } else {
        checked_nodes.push(node); // push this to checked nodes ( this is to account for bidirectional relationships )
        queue = queue.concat(node.connections); // this joins the arrays and returns the joined arr without modifying the arrays ( the children or connections of the node that has been checked are added to queue )
      }
    }
  }
  return false; // no node found
}

const result = breadth_first_search(morfar, "sis");
console.log(result); // Node with value "sis"
