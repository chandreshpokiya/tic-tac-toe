import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";
import SquareCompo from "./components/Squarecompo";

const initialState = ["", "", "", "", "", "", "", "", ""];

var finalWinner = '';

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isXChance, setIsXChance] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // const [winner, setWinner] = useState(null);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "O";
    setGameState(strings);
    setIsXChance(!isXChance);
    setOpenModal(false)
  };

  useEffect(() => {
    // setWinner(checkWinner());
    var winner = checkWinner();
    // setWinner(tempwinner);
    // console.log(winner)
    finalWinner = winner;

    if (winner) {
      // alert("Winner: " + winner);
      setOpenModal(true);
      setGameState(initialState);
    }
  }, [gameState]);

  const checkWinner = () => {
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
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        // setWinner(gameState[a])
        // console.log(winner)
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <>
      <div className="app-header">
        <p className="heading-text">Tic Tac Toe - 2022</p>
        <div className="d-flex jc-center">
          <SquareCompo
            className="b-bottom-right"
            state={gameState[0]}
            onClick={() => onSquareClicked(0)}
          />
          <SquareCompo
            className="b-bottom-right"
            state={gameState[1]}
            onClick={() => onSquareClicked(1)}
          />
          <SquareCompo
            className="b-bottom"
            state={gameState[2]}
            onClick={() => onSquareClicked(2)}
          />
        </div>
        <div className="d-flex jc-center">
          <SquareCompo
            className="b-bottom-right"
            state={gameState[3]}
            onClick={() => onSquareClicked(3)}
          />
          <SquareCompo
            className="b-bottom-right"
            state={gameState[4]}
            onClick={() => onSquareClicked(4)}
          />
          <SquareCompo
            className="b-bottom"
            state={gameState[5]}
            onClick={() => onSquareClicked(5)}
          />
        </div>
        <div className="d-flex jc-center">
          <SquareCompo
            className="b-right"
            state={gameState[6]}
            onClick={() => onSquareClicked(6)}
          />
          <SquareCompo
            className="b-right"
            state={gameState[7]}
            onClick={() => onSquareClicked(7)}
          />
          <SquareCompo
            state={gameState[8]}
            onClick={() => onSquareClicked(8)}
          />
        </div>

        <button
          className="btn btn-primary clear-button"
          onClick={() => {
            setGameState(initialState);
            setOpenModal(false);
          }}
        >
          Clear Board
        </button>
        <p>Created by Chandresh Pokiya</p>
      </div>
      {openModal ? (
        <Modal winner={finalWinner}
          onClick={() => {
            setOpenModal(false);
          }}
        />
      ) : null}
    </>
  );
}

export default App;
