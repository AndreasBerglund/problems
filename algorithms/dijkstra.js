/**
 * An implementation of Dijkstra's algorithm as described in grokking algorithms by Aditya Y. Bhargava
 * Dijkstra can calculate the shortest path between a start and a finish node
 * in a graph. Unlike breadthfirst search, Dijkstra accounts for the "cost"
 * of an edge. ( the path between nodes )
 *
 * Dijkstras algorithm is compromised of four steps
 * 1 ) Find the cheapest path
 * 2 ) Update the "cost" of the neighbours of this node
 * 3 ) Repeat until steps 1 and 2 has been done for every node in graph
 * 4 ) Calculate the final path
 *
 * Example graph
 *
 *   6___  A ___ 1
 *   |     |     |
 *   S     3     F
 *   |     |     |
 *   2 ___ B ___ 5
 *
 *  First iteration
 *  A | 6
 *  B | 2
 *  F | infinity // No direct path to F in first iteration
 *
 *  Second iteration ( after looking at Node B we found a cheaper path from s to A)
 *  A | 5 ! A cheaper path  from S to A
 *  B | 2
 *  F | 7
 *
 *  Third iteration ( after looking at Node A )
 *  A | 5
 *  B | 2
 *  F | 6
 *
 *
 */

function dijkstras() {
  // Build a simple graph
  const graph = {
    s: {
      a: 6,
      b: 2,
    },
    a: {
      f: 1,
    },
    b: {
      a: 3,
      f: 5,
    },
    f: {},
  };

  const costs = {
    s: 0,
    a: Infinity,
    b: Infinity,
    f: Infinity,
  };

  const parents = {
    a: "s",
    b: "s",
    f: null,
  };

  const processed = [];

  let node = find_lowest_cost_node(costs, processed);
  while (node) {
    const cost = costs[node]; // the cost of current node
    const neighbours = graph[node];
    for (n in neighbours) {
      const new_cost = cost + neighbours[n];
      if (costs[n] > new_cost) {
        costs[n] = new_cost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = find_lowest_cost_node(costs, processed);
  }
  return costs;
}

const costs = dijkstras();

function find_lowest_cost_node(costs, processed) {
  let lowest = Infinity;
  let lowest_cost_node = null;
  for (node in costs) {
    const cost = costs[node];
    if (cost < lowest && processed.indexOf(node) === -1) {
      lowest = cost;
      lowest_cost_node = node;
    }
  }
  return lowest_cost_node;
}
