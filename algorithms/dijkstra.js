/**
 * An implementation of Dijkstra's algorithm
 * Dijkstra can calculate the shortest path between a start and a finish node
 * in a graph. Unlike breadthfirst search Dijkstra accounts for the "cost"
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