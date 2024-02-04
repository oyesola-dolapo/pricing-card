import React from "react";
import styles from "./useEffectExamples.module.css";
import { useEffect, useState } from "react";
import { randomizeArr } from "../../helpers/array.js";
const colors = ["red", "purple", "green", "black", "gold", "pink"];

const UseEffectExamples = () => {
  const [showBox, setShowBox] = useState(true);
  const [randomColor, setRandomColor] = useState(colors[0]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const myButton = document.getElementById("my-btn");
    console.log(myButton);
  }, [showBox]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);


  return (
    <section
      style={{ backgroundColor: randomColor }}
      className={`${styles.container} center-vertical`}>
      <h1>useEffect Examples</h1>
      {showBox && <div className={styles.block}></div>}
      <button
        id="my-btn"
        className={styles.btn}
        onClick={() => {
          setShowBox(!showBox);
        }}>
        Toggle Box
      </button>
      <button
        id="my-btn"
        className={styles.btn}
        onClick={() => {
          const myRandomColor = randomizeArr(colors)[0];
          setRandomColor(myRandomColor);
        }}>
        randomize color
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};

export default UseEffectExamples;
