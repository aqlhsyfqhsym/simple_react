import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import AnimatedTextHover from "./../../Components/animated_text/animated_text3";
import TitleDesc from "./../../Components/title_and_desc";
import TicTacToe from "./../../Components/tictactoe";
import Modal from "./../../Components/modal/modal-projects";
import Card from "./../../Components/card";

import styles from "./project.module.scss";

export default function Home() {
  const [modal, setModal] = useState({
    project1: false,
    project2: false,
    project3: false,
    project4: false,
    project5: false,
    project6: false,
    project7: false,
  });
  const openModal = (project) => {
    setModal({ ...modal, [project]: true });
  };

  return (
    <main className={styles.main}>
      <div className={styles.spacer1}>
        <div className={styles.containerGrid}>
          <div className={styles.card1}>
            <img
              className={styles.imageCard}
              src="img/project/web.png"
              alt=""
              onClick={() => openModal("project1")}
            />
            <Modal
              isOpen={modal.project1}
              setIsOpen={() => setModal({ project1: false })}
              title="project 1"
              description={<>project 1</>}
            />
          </div>
          <div class={styles.card2}>
            <img
              className={styles.imageCard}
              src="img/project/powerfy_mobile.gif"
              alt=""
              onClick={() => openModal("project2")}
            />
            <Modal
              isOpen={modal.project2}
              setIsOpen={() => setModal({ project2: false })}
              title="project 2"
              description={<>project 2</>}
            />
          </div>
          <div class={styles.card3}> 
            <img
              className={styles.imageCard} style={{backgroundColor: "#fff", objectFit: "contain"}} 
              src="img/mobile_6.png"
              alt=""
              onClick={() => openModal("project3")}
            />
            <Modal
              isOpen={modal.project3}
              setIsOpen={() => setModal({ project3: false })}
              title="project 3"
              description={<>project 3</>}
            />
          </div>
          <div class={styles.card4}>
            <img
              className={styles.imageCard}
              src="img/project/boost_logo.png"
              alt=""
              onClick={() => openModal("project4")}
            />
            
            <Modal
              isOpen={modal.project4}
              setIsOpen={() => setModal({ project4: false })}
              title="project 4"
              description={<>project 4</>}
            />
          </div>
          <div class={styles.card5}>
            <img
              className={styles.imageCard}
              src="img/5.jpg"
              alt=""
              onClick={() => openModal("project5")}
            />
            <Modal
              isOpen={modal.project5}
              setIsOpen={() => setModal({ project5: false })}
              title="project 5"
              description={<>project 5</>}
            />
          </div>
          <div class={styles.card6} >
            <img
              className={styles.imageCard} 
             
              src="img/project/logo-1.png"
              alt=""
              onClick={() => openModal("project6")}
            />
            <Modal
              isOpen={modal.project6}
              setIsOpen={() => setModal({ project6: false })}
              title="project6"
              description={<>project6</>}
            />
          </div>
          <div class={styles.card7}>
            <img
              className={styles.imageCard}
              src="img/4.jpg"
              alt=""
              onClick={() => openModal("project7")}
            />
            <Modal
              isOpen={modal.project7}
              setIsOpen={() => setModal({ project7: false })}
              title="project7"
              description={<>project7</>}
            />
          </div>
          <div class={styles.card8}>
            <img
              className={styles.imageCard}
               src="img/project/boost_web.gif"
              alt=""
              onClick={() => openModal("project8")}
            />
            <Modal
              isOpen={modal.project8}
              setIsOpen={() => setModal({ project8: false })}
              title="project8"
              description={<>project8</>}
            />
          </div> 
        </div> 
      </div>

      {/* tictac section */}
      {/* <div className={styles.spacer}  style={{backgroundColor: "#c9c3ac"}} >
        <Card color="#c9c3ac">
          <div className={styles.tictacWrapper} style={{margin: "100px"}}>
            <h2 className={styles.textTitle}> I spent my time on some random code that I found shared by others</h2>
            <TicTacToe />
          </div>
        </Card>
      </div> */}
    </main>
  );
}
