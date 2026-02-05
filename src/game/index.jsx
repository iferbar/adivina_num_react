import Scoreboard from '../scoreboard';
import './style.css';
import { useState, useRef, useEffect } from 'react';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

function Game() {
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const inputRef = useRef(null);
  const [guessNumber, setGuessNumber] = useState(null);

  // const handleCheck = () => {
  //   si el valor es igual al anterior,el score tambien deberia desminuirse
  //   if (guessNumber === Number(inputRef.current.value)) {
  //     setScore((prev) => prev - 1);
  //   }
  //   setGuessNumber(Number(inputRef.current.value));
  // };
  // useEffect(() => {
  //   if (guessNumber !== null && guessNumber !== secretNumber) {
  //     disminuimos el score
  //     setScore((prev) => prev - 1);
  //   } else if (guessNumber === secretNumber) {
  //     if (score > highscore) {
  //       setHighscore(score);
  //     }
  //   }
  // }, [guessNumber]);

  const handleCheck = () => {
    const value = Number(inputRef.current.value);

    if (!value || value < 1 || value > 20) return;

    setGuessNumber(value);

    if (value !== secretNumber) {
      setScore((prev) => Math.max(prev - 1, 0));
    }
    setHighscore((prevHighscore) => Math.max(prevHighscore, score));
  };

  return (
    <main>
      <button className="btn again">Again!</button>
      <section className="left">
        {/* AÑADIDO PARA INTENTOS ANTERIORES  */}
        <p className="attempts">
          Attempts: <span className="attempts-list">None</span>
        </p>
        {/*  FIN AÑADIDO PARA INTENTOS ANTERIORES*/}
        <input type="number" className="guess" ref={inputRef} />
        <button className="btn check" onClick={handleCheck}>
          Check!
        </button>
      </section>
      <Scoreboard
        score={score}
        highscore={highscore}
        secretNumber={secretNumber}
        guessNumber={guessNumber}
      />
    </main>
  );
}

export default Game;
