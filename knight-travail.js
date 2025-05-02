// Check for knightmoves to not go off the board and go to visited node twice
function isValid(x, y, visited) {
  const boardValidity = x >= 0 && x <= 7 && y >= 0 && y <= 7 ? true : false;
  let visitedNode = true;
  let i = 0;
  while (i !== visited.length) {
    let [col, row] = visited[i];
    if (x === col && y === row) {
      visitedNode = false;
      break;
    }
    i++;
  }
  return boardValidity && visitedNode;
}

// Validate the knight moves to avoid knight moves outside the board

// Save all possible directions for knight to moves /
// Possible neighbor vertices
const knightDirections = [
  [1, 2],
  [2, 1],
  [1, -2],
  [2, -1],
  [-1, -2],
  [-2, -1],
  [-1, 2],
  [-2, 1],
];

function knightMoves(start, end) {
  // initialize queue for every node that will be traversed
  const queue = [start];
  // Save visited node from queue
  const visitedNode = [];
  const parentNode = {};

  while (queue.length !== 0) {
    // Get current location of knight from queue
    let [currentX, currentY] = queue.shift();
    visitedNode.push([currentX, currentY]);
    // check for all possible knight directions
    knightDirections.forEach((direction) => {
      let [nextPosX, nextPosY] = direction;
      nextPosX += currentX;
      nextPosY += currentY;
      // if knight has valid moves(Knight didn't go outside board)
      // and the node has never been visited
      if (isValid(nextPosX, nextPosY, visitedNode)) {
        //  push node to queue and mark node to visited
        // get reference of parent node to find the shortest path
        queue.push([nextPosX, nextPosY]);
        visitedNode.push([nextPosX, nextPosY]);
        parentNode[`${nextPosX}, ${nextPosY}`] = [currentX, currentY];
      }
    });
  }
  // Find path from the target node to start node
  const target = end;
  const path = [];
  let targetParent = target;
  // Do looping until targett find path to starting node
  while (targetParent[0] !== start[0] && targetParent[1] !== start[1]) {
    path.push(targetParent);
    // Find parent of the target node
    targetParent = parentNode[`${targetParent[0]}, ${targetParent[1]}`];
  }
  path.push(targetParent);
  path.reverse();
  return path;
}

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));
