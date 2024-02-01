import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ className, children }) => {
  const doSomething = () => {
    alert("react course");
  };
  return (
    <button className={`${styles.button} ${className}`} onClick={doSomething}>{children}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
