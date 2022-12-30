import "./styles.css";
import { useState } from "react";

const obj = { inc: { 1: 0, 2: 0, 3: 0 }, price: { 1: 0, 2: 0, 3: 0 } };
const arr = [
  { id: 1, product: "headset", price: 450 },
  { id: 2, product: "ultra S22", price: 130000 },
  { id: 3, product: "shirt", price: 750 }
];

export default function App() {
  const [res, setRes] = useState(obj);

  const clickFunc = (id) => {
    func(id);
  };
  const func = (id) => {
    var price;
    for (let x in res.inc) {
      if (x == id) {
        let priceOfProducts = arr.map((e) => e);
        price = priceOfProducts[id - 1].price;
      }
    }

    setRes({
      inc: { ...res.inc, [id]: res.inc[id] + 1 },
      price: { ...res.price, [id]: res.price[id] + 1 * price }
    });
  };

  return (
    <div className="App">
      {arr.map((e) => (
        <div key={e.id}>
          {res.inc[e.id] > 0 && <span>count:{res.inc[e.id]}</span>}
          <button style={{ margin: "5px" }} onClick={() => clickFunc(e.id)}>
            {e.product} &#8377;{e.price}
          </button>
          {res.price[e.id] > 0 && <span>count:{res.price[e.id]}</span>}
        </div>
      ))}
    </div>
  );
}
