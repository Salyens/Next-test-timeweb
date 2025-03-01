import React from "react";
import classNames from "classnames";

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
      className={classNames("button", className)}
    >
      {children}
    </button>
  );
};

export default Button;
