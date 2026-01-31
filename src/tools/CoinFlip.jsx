import { useState } from "react";

function CoinFlip() {
  const [result, setResult] = useState("");

  const flipCoin = () => {
    setResult(Math.random() > 0.5 ? "Heads" : "Tails");
  };

  return (
    <div className="main">
      <h2>Coin Flipper</h2>
      <button onClick={flipCoin}>Flip Coin</button>
      <h3>{result}</h3>
    </div>
  );
}

export default CoinFlip;
