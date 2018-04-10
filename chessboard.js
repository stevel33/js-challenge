const chessboard = (rows) => {
  if (rows < 2) {
    return undefined;
  }

  let board = ''
  
  // for i # of rows, output j # of columns
  // when i and j are BOTH even or odd, fill with #
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      if (i % 2 === j % 2) {
        board += '#'
      } else {
        board += ' '
      }
    }

    board += '\n';
  }

  console.log(board);
  return board;
}

console.log(chessboard(8));

module.exports = chessboard;