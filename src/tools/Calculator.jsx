import { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");

  return (
    <div className="main">
      <h2>Calculator</h2>

      <input
        type="text"
        value={value}
        readOnly
        style={{ width: "200px", height: "30px" }}
      />

      <div>
        {"123+456-*/=".split("").map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "="
                ? setValue(eval(value))
                : setValue(value + btn)
            }
          >
            {btn}
          </button>
        ))}
        <button onClick={() => setValue("")}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
