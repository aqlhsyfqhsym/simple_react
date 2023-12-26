import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./animated_text.css";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="App">
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="title">
        <div className="title-head1">
          <span>CODING IS </span>
          <span>FUN</span>
        </div>
        <div className="title-head2">
          <span>when it works </span>
          {/* <p >#forreal</p> */}
        </div>
      </div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
}

export default App;
