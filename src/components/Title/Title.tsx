import React from "react";

const Title = ({ title }: { title: string | undefined }) => {
  if (!title) return null;
  return (
    <h2 className="text-3xl md:text-4xl font-bold pt-10 pb-2 md:pt-14 md:pb-4">
      {title}
    </h2>
  );
};

export default Title;
