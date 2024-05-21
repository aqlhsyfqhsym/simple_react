import BackgroundVideo from "./assets/video/video2.mp4";
import Contact from "./Components/contact";
import Button from "./Components/button";
import List from "./Components/text_description";
import Card from "./Components/card";
import TicTacToe from "./Components/tictactoe";
import Intro from "./Components/intro";
import ContactInfo from "./data/contact";
import { motion } from "framer-motion";
import AnimatedTextWord from "./Components/animated_text/animated_text";
import AnimatedTextCharacter from "./Components/animated_text/animated_text2";

import { useState } from "react";

import "./App.css";

let nextId = 3;
const exstingWord = [
  { id: 0, name: "Give the best and dont worry about the result." },
  { id: 1, name: "Nothing lost or wasted in the life." },
  { id: 2, name: '"No" is a complete sentence.' },
];

function App() {
  const [name, setName] = useState("");
  const [words, setWords] = useState(exstingWord);

  const handleWord = () => {
    setWords([...words, { id: nextId++, name: name }]);

    setName("");
  };

  return (
    <main className="main">
      <div className="stickyText"> aqilah syafiqah</div>
      <div className="hero-container">
        <video src={BackgroundVideo} autoPlay loop muted playsinline/>
        <div className="headerDesc">
          <AnimatedTextCharacter text="AQILAH SYAFIQAH" />
          <AnimatedTextWord text="Shah Alam City, MY" />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
          >
            <Contact contactInfo={ContactInfo} />
          </motion.div>
        </div>
      </div>

      {/* <Card color="#000000e8">
        <div class="wrapper">
          <h1 className="text-title">Share me your best thought!</h1>
          <input
            className="inputContainer"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleWord} variant="primary">
            Share
          </Button>
          {words.map((wording) => (
            <List key={wording.id} text={wording.name} />
          ))}
        </div>
      </Card> */}
      {/* <Intro></Intro> */}

      {/* <Card color="#0f1b21">
        <div class="wrapper">
          <h1 className="text-title">Let's play tic tac toe!</h1>
          <TicTacToe />
        </div>
      </Card> */}
    </main>
  );
}

export default App;
