import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from './components/Demo/Demo';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  console.log("App Running ... ");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraphHandler}>
        Toggle Paragraph
        </Button>
      {/* {showParagraph && <p>This is new Paragraph</p>} */}

      <Demo show={showParagraph}></Demo>
    </div>
  );
}

export default App;
