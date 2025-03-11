"use client";

import React from "react";
import classNames from "classnames";
import styles from "./button.module.css";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  className,
  ...otherProps
}: Props) => {
  return (
    <div className={styles.button}>
      <motion.button
        className={classNames(
          styles.shimmerButton,
          className
        )}
        initial={{ backgroundPosition: "200% 0" }}
        animate={{ backgroundPosition: "-200% 0" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        {...otherProps}
      >
        {children}
      </motion.button>
    </div>
  );
};

export default Button;
