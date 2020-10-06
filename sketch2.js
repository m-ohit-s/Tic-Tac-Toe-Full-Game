
//Global Variables
let board = [
  ['','',''],
  ['','',''],
  ['','','']
]

let w;
let h;

let player1 = 'O';
let player2 = 'X';

let currentPlayer = player1;


//Functions

//initialize
function setup() {
  let cnv = createCanvas(400,400);
  cnv.center();

  w = width/3;
  h = height/3;
}

//Tic-Tac-Toe board
function createBoard() {

  background(220);
  strokeWeight(4);

  line(w,0, w,height);
  line(w*2,0, w*2,height);
  line(0,h, width,h);
  line(0,h*2, width,h*2);
}

//Human Turn
function mousePressed() {
  let nextPlayer;
  if(currentPlayer == player1) {
    nextPlayer = player2;
  }
  else {
    nextPlayer = player1;
  }

    let i = floor(mouseX / w);
    let j = floor(mouseY / h);

    // console.log(mouseX);
    // console.log(mouseY);
    // console.log(w);
    // console.log(h);
    // console.log(mouseX/w);
    // console.log(mouseY/h);
    //check valid move
    if(board[i][j] == "") {
      board[i][j] = currentPlayer;
      currentPlayer = nextPlayer;
      //console.log(currentPlayer);
      //console.log(nextPlayer);
    }
  }

//Drawing
function draw() {
  createBoard();

  //drawing X and O

  for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++ ) {
      let x = w*i + w/2;
      let y = h*j + h/2;
      let spot = board[i][j];
      textSize(32);
      let r = w/4;

      //drawing X
      if(spot == player2)
      {
        line(x-r,y-r, x+r,y+r);
        line(x+r,y-r, x-r,y+r);
      }

      else if(spot == player1)
      {
        noFill();
        ellipse(x , y, r*2);
      }
    }
  }

  let result = checkWinner();
  if(result != null)
  {
    noLoop();
    let resultP = createP('');
    resultP.style('font-size', '32pt');

    if(result=="TIE")
      resultP.html("TIE");
    else
      resultP.html(`${result} wins !`)
  }
}
