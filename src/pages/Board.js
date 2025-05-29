import Square from "../components/Square";
import { useState, useEffect } from "react";

export default function Board({
  xIsNext,
  squares,
  onPlay,
  winner,
  winningIndices,
}) {
  //   const [squares, setSquares] = useState(Array(9).fill(null));
  //   const [xIsNext, setXIsNext] = useState(true);

  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  const handleClick = (i) => {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice(); // copy of array

    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => {
            let index = row * 3 + col;
            let isWinnerSquare = winningIndices.includes(index);
            let bgColor = {
              backgroundColor: isWinnerSquare ? "#ffff00" : "#fff",
            };
            return (
              <Square
                key={index}
                value={squares[index]}
                style={bgColor}
                onSquareClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      ))}

      {/* <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div> */}
    </>
  );
}
