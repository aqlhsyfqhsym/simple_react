import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import styles from "./modal.module.scss";

const modalImage = ({
  isOpen,
  setIsOpen,
  displayContentA,
  displayContentB,
  title,
  description,
  siteName,
  livesite,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  const contentA = {
    display: displayContentA,
  };

  const contentB = {
    display: displayContentB,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className={styles.customOverlay}
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className={styles.cardCtm}
          >
            {/* <FiAlertCircle className={styles.ctmText} /> */}
            <div className="relative z-10">
              {/* <div className={styles.circleContainer}>
                  <FiAlertCircle />
                </div> */}
              <h3 className="text-3xl font-bold text-center mb-2">
                Project: {title}
              </h3>
              <div style={contentA}>
                <div className={styles.containerCollage}>
                  <div className={styles.web}>
                    <img src={image1} alt="" />
                  </div>
                  <div className={styles.logo1}>
                    <img src={image2} alt="" />
                  </div>
                  <div className={styles.logo2}>
                    <img src={image3} alt="" />
                  </div>
                  <div className={styles.mobile}>
                    <img
                      src={image4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div style={contentB}>
              <img src={image5} alt="" className={styles.saImage}/>
              </div>
              <div className={styles.containerDescText}>
                <p>{description}</p>
                Live site: <a href={livesite}>{siteName}</a>
              </div>
              <div className={styles.containerWrap}>
                <button
                  onClick={() => setIsOpen(false)}
                  className={styles.primaryCtmButton}
                >
                  Go back
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default modalImage;
