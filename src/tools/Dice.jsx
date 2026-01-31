import { useState } from "react";

function Dice() {
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    setNumber(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="main">
      <h2>Dice Roller</h2>
      <button onClick={rollDice}>Roll Dice</button>
      <h3>🎲 {number}</h3>
    </div>
  );
}

export default Dice;
