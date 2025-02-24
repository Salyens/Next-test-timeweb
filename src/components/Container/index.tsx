import React from "react";
import classNames from "classnames";
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        "container mx-auto max-w-7xl px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
