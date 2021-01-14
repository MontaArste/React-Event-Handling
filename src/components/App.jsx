import React, { useState } from "react";

function App() {
  const [colour, setColour] = useState("white");

  function mouseOver() {
    setColour("black");
  }
  function mouseOut() {
    setColour("white");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{ backgroundColor: colour }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

//////Angelas version//////
// function App() {
//   const [ismouseOver, setMouseOver] = useState(false);
//   function handleMouseOver() {
//     setMouseOver(true);
//   }
//   function handleMouseOut() {
//     setMouseOver(false);
//   }

//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//         style={{ backgroundColor: ismouseOver ? "black" : "white" }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;
