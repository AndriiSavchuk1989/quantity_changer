import React from "react";
import ReactDOM from "react-dom";
import QuantityChangerComponent from "./QuantityChangerComponent";

import "./styles.css";

const products = [
  {
    quantity: 100,
    id: 1
  },
  {
    quantity: 150,
    id: 2
  },
  {
    quantity: 1,
    id: 3
  },
  {
    quantity: 1,
    id: 4
  }
];

const Elements = () => {
  return products.map(product => (
    <QuantityChangerComponent product={product} />
  ));
};

console.log(Elements);

const rootElement = document.getElementById("root");
ReactDOM.render(<Elements />, rootElement);
