/**
 * A graph consists of node with a value, which have connections to each other and the connections may have a 'weight'
 */
function Node(value) {
  this.value = value;
  this.connections = []; // connections to other Nodes
  this.connect = function (node) {
    this.connections.push(node);
  };
}

/**
 * Building this graph
 *
 *       morfar
 *         |
 *        mor
 *       __|__
 *      |     |
 *     mig   sis
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
  let queue = start_node.connections;
  const checked_nodes = [];
  while (queue.length > 0) {
    // remove from the queue
    const node = queue.shift();
    //check if this has been checked
    if (checked_nodes.map((node) => node.value).indexOf(node.value) === -1) {
      if (node.value === query) {
        return node;
      } else {
        checked_nodes.push(node);
        queue = queue.concat(node.connections); // this joins the arrays and returns the joined arr without modifying the arrays
      }
    }
  }
  return false; // none found
}

const result = breadth_first_search(morfar, "sis");
console.log(result); // Node with value "sis"
