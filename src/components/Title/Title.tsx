import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-4xl font-bold py-10">
      {title}
    </h2>
  );
};

export default Title;
