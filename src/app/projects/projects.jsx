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
              title="Powefy-AU"
              description={
                <>
                  Develop the entire system using React.js, Next.js, and
                  Bootstrap/SCSS, ensuring precise implementation of the design
                  envisioned by the creative team in Figma{" "}
                </>
              }
              siteName="Hot Water Saving"
              livesite="https://hotwatersavings.au/"
              image1="img/project/web.png"
              image2="img/project/logo-1.png"
              image3="img/project/hws_logo2.png"
              image4="img/project/powerfy_mobile.gif"
              displayContentA="block"
              displayContentB="none"
              image5="img/"
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
              title="Powefy-AU"
              description={
                <>
                  Develop the entire system using React.js, Next.js, and
                  Bootstrap/SCSS, ensuring precise implementation of the design
                  envisioned by the creative team in Figma{" "}
                </>
              }
              siteName="Hot Water Saving"
              livesite="https://hotwatersavings.au/"
              image1="img/project/web.png"
              image2="img/project/logo-1.png"
              image3="img/project/hws_logo2.png"
              image4="img/project/powerfy_mobile.gif"
              displayContentA="block"
              displayContentB="none"
              image5="img/"
            />
          </div>
          <div class={styles.card3}>
            <img
              className={styles.imageCard}
              style={{ backgroundColor: "#fff" }}
              src="img/project/golf_mobile.png"
              alt=""
              onClick={() => openModal("project3")}
            />
            <Modal
              isOpen={modal.project3}
              setIsOpen={() => setModal({ project3: false })}
              title="Golf Booking System (UI/UX)"
              description={
                <>
                  It's actually an internal project for my current company. I'm
                  responsible for designing from scratch using Adobe XD,
                  starting with wireframes and prototypes. Research has also
                  been conducted by my team and me. The design was inspired by
                  the latest aesthetic trends, incorporating current-gen
                  elements.{" "}
                </>
              }
              siteName="Behance Case Study"
              livesite="https://www.behance.net/gallery/164928797/Golf-Booking-Study-Case/modules/930160343"
              image1="img/project/golf_1.png"
              image2="img/project/golf_2.png"
              image3="img/project/golf_3.png"
              image4="img/project/golf_mobile.gif"
              displayContentA="block"
              displayContentB="none"
              image5="img/"
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
              title="Boost Bank"
              description={
                <>
                  Collaborated with the creative team to translate designs into
                  interactive web pages using storybook, developed dynamic UI
                  components, ensured Drupal backend integration, and addressed
                  design issues during SIT/UAT.{" "}
                </>
              }
              siteName="Boost Bank"
              livesite="https://newsite.myboostbank.co/"
              image1="img/"
              image2="img/project/boost_logo.png"
              image3="img/project/boost_logo.png"
              image4="img/project/boost_logo.png"
              displayContentA="none"
              displayContentB="block"
              image5="img/project/boost_logo.png"
            />
          </div>
          <div class={styles.card5}>
            <img
              className={styles.imageCard}
              src="img/project/me_mobile.gif"
              alt=""
              onClick={() => openModal("project5")}
            />
            <Modal
              isOpen={modal.project5}
              setIsOpen={() => setModal({ project5: false })}
              title="Personal Website"
              description={<>im using pure react and pure scss hehehe </>}
              siteName="Aqilah Syafiqah"
              livesite="aqilahsyafiqah.com"
              image1="img/"
              image2="img/ "
              image3="img/ "
              image4="img/ "
              displayContentA="none"
              displayContentB="block"
              image5="img/project/personal.gif"
            />
          </div>
          <div class={styles.card6}>
            <img
              className={styles.imageCard}
              src="img/project/logo-1.png"
              alt=""
              onClick={() => openModal("project6")}
            />
            <Modal
              isOpen={modal.project6}
              setIsOpen={() => setModal({ project6: false })}
              title="Powefy-AU"
              description={
                <>
                  Develop the entire system using React.js, Next.js, and
                  Bootstrap/SCSS, ensuring precise implementation of the design
                  envisioned by the creative team in Figma{" "}
                </>
              }
              siteName="Hot Water Saving"
              livesite="https://hotwatersavings.au/"
              image1="img/project/web.png"
              image2="img/project/logo-1.png"
              image3="img/project/hws_logo2.png"
              image4="img/project/powerfy_mobile.gif"
              displayContentA="block"
              displayContentB="none"
              image5="img/"
            />
          </div>
          <div class={styles.card7}>
            <img
              className={styles.imageCard}
              src="img/project/baked_mobile.png"
              alt=""
              onClick={() => openModal("project7")}
            />
            <Modal
              isOpen={modal.project7}
              setIsOpen={() => setModal({ project7: false })}
              title="Adobe XD Certificate assesment"
              description={<>im using pure react and pure scss hehehe </>}
              siteName="Adobe XD Certificate"
              livesite="https://www.udemy.com/certificate/UC-e4c07591-3953-4a86-9767-b385580d9f46/"
              image1="img/project/certificate.png"
              image2="img/project/baked_1.png "
              image3="img/project/baked_2.png"
              image4="img/project/baked2_mobile.png"
              displayContentA="block"
              displayContentB="none"
              image5="img/"
            />
          </div>
          <div class={styles.card8}>
            <img
              className={styles.imageCard}
              src="img/project/task_web.gif"
              alt=""
              onClick={() => openModal("project8")}
            />
            <Modal
              isOpen={modal.project8}
              setIsOpen={() => setModal({ project8: false })}
              title="Task Management System (UI/UX & Front-End)"
              description={
                <>
                  In House System, develop using larevel PHP, HTML/CSS as a
                  front side with bootstrap framework. some animation are from
                  scratch.{" "}
                </>
              }
              siteName="Cara Task Management System"
              livesite="https://task.cara.com.my/"
              image1="img/project/certificate.png"
              image2="img/project/baked_1.png "
              image3="img/project/baked_2.png"
              image4="img/project/baked2_mobile.png"
              displayContentA="block"
              displayContentB="none"
              image5="img/"
            />
          </div>
        </div>
        {/* <div className={styles.containerGridMobile}>
          <div className={styles.boxcardRow}>
            <div className={styles.boxcard1}>
              <img
                className={styles.imageCard}
                src="img/project/web.png"
                alt=""
                onClick={() => openModal("project1")}
              />
              <Modal
                isOpen={modal.project1}
                setIsOpen={() => setModal({ project1: false })}
                title="Powefy-AU"
                description={
                  <>
                    Develop the entire system using React.js, Next.js, and
                    Bootstrap/SCSS, ensuring precise implementation of the
                    design envisioned by the creative team in Figma{" "}
                  </>
                }
                siteName="Hot Water Saving"
                livesite="https://hotwatersavings.au/"
                image1="img/project/web.png"
                image2="img/project/logo-1.png"
                image3="img/project/hws_logo2.png"
                image4="img/project/powerfy_mobile.gif"
                displayContentA="block"
                displayContentB="none"
                image5="img/"
              />
            </div>
            <div className={styles.boxcard1}>
              {" "}
              <img
                className={styles.imageCard}
                src="img/project/powerfy_mobile.gif"
                alt=""
                onClick={() => openModal("project2")}
              />
              <Modal
                isOpen={modal.project2}
                setIsOpen={() => setModal({ project2: false })}
                title="Powefy-AU"
                description={
                  <>
                    Develop the entire system using React.js, Next.js, and
                    Bootstrap/SCSS, ensuring precise implementation of the
                    design envisioned by the creative team in Figma{" "}
                  </>
                }
                siteName="Hot Water Saving"
                livesite="https://hotwatersavings.au/"
                image1="img/project/web.png"
                image2="img/project/logo-1.png"
                image3="img/project/hws_logo2.png"
                image4="img/project/powerfy_mobile.gif"
                displayContentA="block"
                displayContentB="none"
                image5="img/"
              />{" "}
            </div>
         
          </div>
        </div> */}
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
