import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import styles from "./modal.module.scss";

const modalImage = ({ isOpen, setIsOpen, 	title, description, }) => {
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
                  {title}
                </h3>
                <p>
                 {description}
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
  

export default modalImage;
