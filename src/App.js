import "./styles.css";
import { useState } from "react";

const obj = { 1: 0, 2: 0, 3: 0 };

const arr = [
  { id: 1, product: "headset", price: 450 },
  { id: 2, product: "ultra S22", price: 130000 },
  { id: 3, product: "shirt", price: 750 }
];

export default function App() {
  const [res, setRes] = useState(obj);

  const clickFunc = (id) => {
    setRes({ ...res, [id]: res[id] + 1 });
    let amount = 0;
    for (let x in res) {
      let product = arr.find((e) => e.id == Number(x));
      amount = amount + res[x] * product.price;
      // console.log(res[x]);
    }
    console.log(amount);
  };
  return (
    <div className="App">
      {arr.map((e) => (
        <button
          style={{ margin: "5px" }}
          key={e.id}
          onClick={() => clickFunc(e.id)}
        >
          {e.product}
        </button>
      ))}
    </div>
  );
}
