import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

import styles from "./modal.module.scss";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.placeContainer}>
      <button onClick={() => setIsOpen(true)} className={styles.customButton}>
        Open Modal
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
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
            <FiAlertCircle className={styles.ctmText} />
            <div className="relative z-10">
              <div className={styles.circleContainer}>
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                One more thing!
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </p>
              <div className={styles.containerWrap}>
                <button
                  onClick={() => setIsOpen(false)}
                  className={styles.secondaryCtmButtom}
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={styles.primaryCtmButton}
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
