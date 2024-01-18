import styles from "./title_and_desc.module.scss";

const Paragraph = ({ number, title, desc }) => {
  return (
    <>
      <div className={styles.titleWrapper}>
        <div className={styles.wrapTitle}>
          <span className={styles.numberText}>{number}</span>
          <h1>{title}</h1>
        </div>
        <div className={styles.description}>{desc}</div>
      </div>
    </>
  );
};

export default Paragraph;
