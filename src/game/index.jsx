import Scoreboard from '../scoreboard';
import './style.css';
import { useState, useRef } from 'react';

function Game() {
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [guessNumber, setGuessNumber] = useState(null);
  const [secretNumber, setSecretNumber] = useState(
    () => Math.trunc(Math.random() * 20) + 1,
  );
  const inputRef = useRef(null);

  const handleNewGame = () => {
    setScore(20);
    setGuessNumber(null);
    inputRef.current.value = '';
    inputRef.current.focus();
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);
  };

  //asincrono para que sea simultanea la ejecucion y tienes los datos necesarios en el handlecheck
  //no se usa un useffect porque seria sincrono y seria una tras otra
  const handleCheck = () => {
    const inputNumber = Number(inputRef.current.value);
    setGuessNumber(inputNumber);
    // si el valor es igual al anterior,el score tambien deberia desminuirse
    if (inputNumber !== secretNumber) {
      setScore((prev) => prev - 1);
    } else {
      setHighscore(score);
    }
  };

  // useEffect(() => {
  //   if (guessNumber !== null && guessNumber !== secretNumber) {
  //     // disminuimos el score
  //     setScore((prev) => prev - 1);
  //   } else if (guessNumber === secretNumber) {
  //     if (score > highscore) {
  //       setHighscore(score);
  //     }
  //   }
  // }, [guessNumber]);

  return (
    <main>
      <button className="btn again" onClick={handleNewGame}>
        Again!
      </button>
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
