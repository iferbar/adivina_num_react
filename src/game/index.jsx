import './style.css';
function game() {
  return (
    <main>
      <button class="btn again">Again!</button>
      <section class="left">
        {/* AÑADIDO PARA INTENTOS ANTERIORES  */}
        <p class="attempts">
          Attempts: <span class="attempts-list">None</span>
        </p>
        {/*  FIN AÑADIDO PARA INTENTOS ANTERIORES*/}
        <input type="number" class="guess" />
        <button class="btn check">Check!</button>
      </section>
      <section class="right">
        <p class="message">Start guessing...</p>
        <p class="label-score">
          💯 Score: <span class="score">20</span>
        </p>
        <p class="label-highscore">
          🥇 Highscore: <span class="highscore">0</span>
        </p>
      </section>
    </main>
  );
}

export default game;
