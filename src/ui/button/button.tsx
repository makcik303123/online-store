import styles from "./button.module.scss";
import { ButtonProps } from "./";

export const Button = ({ children, type, handlerClick }: ButtonProps) => {
  const className = styles.button + ` ${styles[type]}`;

  return (
    <button onClick={handlerClick} className={className}>
      {children}
    </button>
  );
};
