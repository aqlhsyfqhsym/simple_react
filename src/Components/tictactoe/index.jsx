import { useState, useRef } from "react";
import circle from "./../../assets/img/circle.png";
import cross from "./../../assets/img/cross.png";
import "./tictactoe.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="boxes" onClick={onSquareClick}>
   {value === "X" || value === "O" ? (
        <img
          src={value === "X" ? cross : circle}
          alt={value === "X" ? "X" : "O"}
        />
      ) : null}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calcWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calcWinner(squares)) {
      return;
    }

    //update the squares array holding your board’s state
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <h4 className="status">{status}</h4>
      <div className="containerTictac">
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => {
              handleClick(0);
            }}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => {
              handleClick(1);
            }}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => {
              handleClick(3);
            }}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => {
              handleClick(4);
            }}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => {
              handleClick(6);
            }}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => {
              handleClick(7);
            }}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
    </>
  );
}

function calcWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
