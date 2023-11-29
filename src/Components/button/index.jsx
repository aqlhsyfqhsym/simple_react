import styles from "./button.css"; 

const Button = ({ children, variant = "primary", onClick }) => {
 

  return (
    <button className={`button ${variant}`} onClick={onClick}>
    {children}
  </button>
  );
};

export default Button;

 