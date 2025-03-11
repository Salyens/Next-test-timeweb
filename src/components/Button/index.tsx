import React from "react";
import classNames from "classnames";
import styles from "./button.module.css";
const Button = ({
  children,
  className,
  ...otherProps
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      {...otherProps}
      className={classNames(styles.button, className)}
    >
      {children}
    </button>
  );
};

export default Button;
