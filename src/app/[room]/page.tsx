import React from 'react'

const page = ({ params }: { params: { room: string } }) => {
  return <div>{params.room}</div>;
};

export default page