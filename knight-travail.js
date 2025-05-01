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
  const parent = {};

  while (queue.length !== 0) {
    // Get current location of knight from queue
  }
}
