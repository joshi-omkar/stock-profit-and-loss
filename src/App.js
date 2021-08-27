import { useState } from "react";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  const [initial, setInitial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [current, setCurrent] = useState("");
  const [output, setOutput] = useState();

  const handleOnCLick = (e) => {
    e.preventDefault();

    if (initial > current) {
      const loss = (initial - current) * quantity;
      const lossPercentage = (loss / initial) * 100;
      setOutput(
        <h2 className="output">
          {" "}
          Hey, the LOSS is ₹{loss} and the percent is {lossPercentage}%{" "}
        </h2>
      );
    } else if (current > initial) {
      const profit = (current - initial) * quantity;
      const profitPercentage = (profit / initial) * 100;
      setOutput(
        <h2 className="output">
          {" "}
          Hey, the PROFIT is ₹{profit} and the percent is {profitPercentage}%{" "}
        </h2>
      );
    } else {
      setOutput(
        <h2 className="output">No pain no gain and no gain no pain</h2>
      );
    }
  };

  return (
    <div className="App">
      <nav>Stock Profile & Loss Calculator</nav>
      <div classNmae="container">
        <h3>Initial Price</h3>
        <input
          type="text"
          className="input"
          placeholder="Enter Initial Price Here"
          onChange={(e) => {
            var intial = Number(e.target.value);
            setInitial(intial);
          }}
        />
        <br />
        <h3>Quantity of Stocks</h3>
        <input
          type="text"
          className="input"
          placeholder="Enter the Number of Stocks bought"
          onChange={(e) => {
            var quantity = Number(e.target.value);
            setQuantity(quantity);
          }}
        />
        <br />
        <h3>Current Price</h3>
        <input
          type="text"
          className="input"
          placeholder="Enter the Current Price of the stocks"
          onChange={(e) => {
            var current = Number(e.target.value);
            setCurrent(current);
          }}
        />

        <br />

        <button type="submit" onClick={handleOnCLick} className="btn">
          Tell Me!!
        </button>
      </div>

      <div>{output}</div>

      <Footer />
    </div>
  );
}
