import Scoreboard from '../scoreboard';
import './style.css';
import { useState, useRef, useEffect } from 'react';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

function Game() {
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const inputRef = useRef(null);
  const [guessNumber, setGuessNumber] = useState(null);

  const handleCheck = () => setGuessNumber(Number(inputRef.current.value));

  useEffect(() => {
    if (guessNumber !== null && guessNumber !== secretNumber) {
      //disminuimos el score
      setScore(score - 1);
    }
  }, [guessNumber]);

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
