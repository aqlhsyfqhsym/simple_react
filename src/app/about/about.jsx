import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import AnimatedTextHover from "./../../Components/animated_text/animated_text3";
import TitleDesc from "./../../Components/title_and_desc";
import AboutImage from "./../../Components/3d_image/3d_image";
import BubbleTitle from "./../../Components/animated_text/animated_text4";

import styles from "./about.module.scss";

const images = ["_1.webp", "_4.webp", "_3.jpg", "_2.jpg", "_5.jpg", "_6.webp"];

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}>
        <AnimatedTextHover />
      </div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[3], images[2], images[3]]} y={y3} />
        <Column images={[images[4], images[0], images[5]]} y={y4} />
      </div>
      <div className={styles.spacer3}>
        <div
          className={styles.contentTwo}
          style={{ alignItems: "center", justifyContent: "flex-end" }}
        >
          <div className={styles.aboutMe2}>
            <p>
              {" "}
              <span className={styles.textDeco}>Hey! </span> I'm Aqilah, <br />
              <span style={{ marginLeft: "50px" }}>
                a twenty-six years{" "}
                <span className={styles.textDeco}>old </span>
              </span>
              <br />
              front-end developer. Currently <br />
              <span style={{ marginLeft: "50px" }}>
                {" "}
                based in <span className={styles.textDeco}>Shah Alam</span>{" "}
              </span>
            </p>
          </div>
          <div className={styles.imageWrap}>
            <img src="img/me1.png" alt="" style={{ width: "95%" }} />
          </div>
        </div>
      </div>
      <div className={styles.spacer3}>
        <div className={styles.contentTwo}>
          <div className={styles.aboutMe3}>
            <p>
              Truthfully, my feelings toward coding are a bit of a
              rollercoaster. There are moments when I find it frustrating, as it
              compels me to engage my brain when I crave relaxation. However,
              once I see it functioning smoothly, a feeling of accomplishment
              and cleverness emerges – that's when my love for it takes over!
            </p>
            <img
              src="img/me.png"
              alt=""
              style={{
                objectFit: "contain",
                width: "25%",
                margin: "0 auto",
                transform: "rotate(351deg)",
              }}
            />
          </div>
          <div className={styles.aboutMe3}>
            <span className={styles.spaceMobile} style={{ height: "50vh" }}></span>
            <span>
              I got 3 years of experience in this field. Before, I was doing
              both UI/UX design and front-end development at the same time. It
              gave me loads of know-how in both design and development.
              <br />
              <br />I enjoy making sure my designs not only look good but are
              also doable in the development process.
              <br />
              <br /> But as I get older, I'm kind of leaning more towards being
              a front-end developer. It seems like these days, finding folks
              with solid development skills is getting pretty rare (is it??)
            </span>
          </div>
        </div>
      </div>
      <div className={styles.spacer3}>
        <div className={styles.contentTwo}>
          <div className={styles.aboutMe3}>
            <p className={styles.hide} >
              When I'm chillin', I vibe out to some songs, or maybe I'll just
              scroll through TikTok for a bit. But when I'm feeling motivated
              and want to be productive, I update my portfolio, whip up some
              baking tools in my kitchen, and do some baking.
            </p>
            <div className={styles.listText}>
              <TitleDesc
                number="01."
                title="INTERACTION"
                desc="Creating a great vibe for your users comes down to the cool animations and interactions in your project. I put in the time to dream up and design them, making sure your navigation feels smooth and totally awesome."
              />
                <TitleDesc
                number="02."
                title="INTROVERT"
                desc="I'm kind of an introvert, love my quiet time, and recharge with some me-time. It's my cozy way to recharge"
              />
                  <TitleDesc
                number="03."
                title="PASSIONATE"
                desc="I'm really passionate about what I do, and I love creating seamless, user-friendly experiences that make a difference in how people interact with websites."
              />
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.spacer}>
        <div className={styles.contentTwo}>
          <AboutImage />
          <div className={styles.aboutMe}>
             <span>
              <p className={styles.sub1}> proc- </p>
              <p className={styles.sub2}>rastinating is</p>
              <div className={styles.sub3sub4}>
                <p className={styles.sub3}>my thing </p>
                <p className={styles.sub4}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joke!i love designing cuz{" "}
                  <br />
                  i love seeing pretty things. <br />i love coding cuz i can
                  love both
                </p>
              </div>
            </span>
          </div>
        </div>
      </div> */}
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <>
      <motion.div className={styles.column} style={{ y }}>
        {images.map((src, i) => {
          return (
            <div key={i} className={styles.imageContainer}>
              <img src={`img/${src}`} alt="image" />
            </div>
          );
        })}
      </motion.div>
    </>
  );
};
