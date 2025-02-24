import React from "react";
import "./button.scss";

const Button = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button {...otherProps} className="button">
      {children}
    </button>
  );
};

export default Button;
