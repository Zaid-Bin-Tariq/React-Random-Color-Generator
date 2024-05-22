import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    handleCreateRandomColor();
  }, [typeOfColor]);

  function handleCreateRandomColor(params) {
    const hexarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcol = "#";
    if (typeOfColor === "hex") {
      for (let i = 0; i < 6; i++) {
        hexcol += hexarr[Math.floor(Math.random() * 15)];
      }
      setColor(hexcol);
    } else {
      let rgbcol = [
        Math.floor(Math.random() * 257),
        Math.floor(Math.random() * 257),
        Math.floor(Math.random() * 257),
      ];
      setColor(`rgb(${rgbcol[0]},${rgbcol[1]},${rgbcol[2]})`);
    }
  }

  console.log(color);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: color,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="btn">
          <button
            onClick={() => {
              setTypeOfColor("hex");
            }}
          >
            Create HEX Color
          </button>
          <button
            onClick={() => {
              setTypeOfColor("rgb");
            }}
          >
            Create RGB Color
          </button>
          <button onClick={handleCreateRandomColor}>
            Generate Random Color
          </button>
        </div>
        <div className="text">
          <h1>{`${typeOfColor} Color`}</h1>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
