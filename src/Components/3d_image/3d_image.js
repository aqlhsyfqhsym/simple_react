import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./3d_image.css";

const Example = () => {
  return (
    <div className="container">
      <TiltCard />
    </div>
  );
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="custom-container"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}
        >
          <div className="custom-wrapper">
            <img src="img/1.jpg" alt="" />
          </div>
          <div className="custom-wrapper">
            <img src="img/1.jpg" alt="" />
          </div>
          <div className="custom-wrapper">
            <img src="img/1.jpg" alt="" />
          </div>
          <div className="custom-wrapper">
            <img src="img/1.jpg" alt="" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Example;
