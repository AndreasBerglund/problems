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

module.exports = Node;
