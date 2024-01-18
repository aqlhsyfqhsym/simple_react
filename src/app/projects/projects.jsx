import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import AnimatedTextHover from "./../../Components/animated_text/animated_text3";
import TitleDesc from "./../../Components/title_and_desc";
import TicTacToe from "./../../Components/tictactoe";
import Modal from "./../../Components/modal/modal-projects";
import Card from "./../../Components/card";

import styles from "./project.module.scss";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}>
        <div className={styles.containerGrid}>
          <div className={styles.card1}>    <img
                className={styles.imageCard}
                src="img/6.jpg"
                alt=""
                onClick={() => setIsOpen(true)}
              />
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} /></div>
          <div class={styles.card2}>
            {" "}
            <img
              className={styles.imageCard}
              src="img/1.jpg"
              alt=""
              onClick={() => setIsOpen(true)}
            />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div class={styles.card3}>
            {" "}
            <img
              className={styles.imageCard}
              src="img/2.jpg"
              alt=""
              onClick={() => setIsOpen(true)}
            />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div class={styles.card4}>
            {" "}
            <img
              className={styles.imageCard}
              src="img/3.jpg"
              alt=""
              onClick={() => setIsOpen(true)}
            />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div class={styles.card5}>
            {" "}
            <img
              className={styles.imageCard}
              src="img/4.jpg"
              alt=""
              onClick={() => setIsOpen(true)}
            />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div class={styles.card6}>
            {" "}
            <img
              className={styles.imageCard}
              src="img/5.jpg"
              alt=""
              onClick={() => setIsOpen(true)}
            />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div class={styles.card7}>
            {" "}
            <img
              className={styles.imageCard}
              src="img/5.jpg"
              alt=""
              onClick={() => setIsOpen(true)}
            />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div class={styles.card8}>
            {" "}
            <img
              className={styles.imageCard}
              src="img/4.jpg"
              alt=""
              onClick={() => setIsOpen(true)}
            />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        {/* <div className={styles.container}>
          <div className={styles.imageGrid}>
            <div className={styles.item0}>
              <img
                className={styles.imageCard}
                src="img/1.jpg"
                alt=""
                onClick={() => setIsOpen(true)}
              />
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={styles.item1} >
              <img
                className={styles.imageCard}
                src="img/2.jpg"
                alt=""
                onClick={() => setIsOpen(true)}
                style={{ height: "100vh" }}
              />
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={styles.item2}>
              <img
                className={styles.imageCard}
                src="img/3.jpg"
                alt=""
                onClick={() => setIsOpen(true)}
              />
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={styles.item3}>
              <img
                className={styles.imageCard}
                src="img/4.jpg"
                alt=""
                onClick={() => setIsOpen(true)} 
              />
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={styles.item4}>
              <img
                className={styles.imageCard}
                src="img/5.jpg"
                alt=""
                onClick={() => setIsOpen(true)}
              />
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            <div className={styles.item5}>
              {" "}
              <img
                className={styles.imageCard}
                src="img/5.jpg"
                alt=""
                onClick={() => setIsOpen(true)}
              />
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={styles.item6}>
              {" "}
              <img
                className={styles.imageCard}
                src="img/5.jpg"
                alt=""
                onClick={() => setIsOpen(true)}
              />
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div> */}
      </div>

      {/* tictac section */}
      {/* <div className={styles.spacer}>
        <Card color="#c9c3ac">
          <div class="wrapper">
            <h1 className="text-title">Let's play tic tac toe!</h1>
            <TicTacToe />
          </div>
        </Card>
      </div> */}
    </main>
  );
}
