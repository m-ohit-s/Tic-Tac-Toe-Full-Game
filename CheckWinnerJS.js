function equals3(a, b, c) {
  return a==b && b==c && a != '';
}

function checkWinner() {

  let winner = null;

  //Check Columns
  for(let i=0; i<3; i++)
  {
      if(equals3(board[i][0], board[i][1], board[i][2]))
        winner = board[i][0];
  }

  //Check Rows
  for(let i=0; i<3; i++)
  {
    if(equals3(board[0][i], board[1][i], board[2][i]))
      winner = board[0][i];
  }

  //Check Diagonals
  if(equals3(board[0][0], board[1][1], board[2][2]))
    winner = board[1][1];

  if(equals3(board[0][2], board[1][1], board[2][0]))
    winner = board[1][1];

  //Check empty spots

  let openspots = 0;
  for(let i=0; i<3; i++)
  {
    for(let j=0; j<3; j++)
    {
      if(board[i][j] == '')
        openspots++;
    }
  }

  if(winner == null && openspots == 0)
    return "TIE";
  else
    return winner;
}
