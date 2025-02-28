import React from "react";

const Title = ({ title }: { title: string | undefined }) => {
  if (!title) return null;
  return (
    <h2 className="text-3xl md:text-4xl font-bold py-6 md:py-10">
      {title}
    </h2>
  );
};

export default Title;
