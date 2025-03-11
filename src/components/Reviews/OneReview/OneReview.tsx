import Image from "next/image";
import React from "react";

interface OneReviewProps {
  slide: {
    id: string;
    name: string;
    review: string;
  };
}
const OneReview = ({ slide }: OneReviewProps) => {
  return (
    <div className="flex flex-col lg:w-[49%] w-full">
      <h2 className="text-md font-bold flex gap-4 items-center mb-4">
        <Image
          src="/icons/brown-house.jpg"
          alt="user"
          width={70}
          height={70}
          className="rounded-full"
        />

        {slide.name}
      </h2>
      <div className="text-sm border-2 border-secondary rounded-lg p-4 md:p-8 min-h-[220px] flex gap-4 items-start flex-col h-full">
        <p className="flex gap-4 items-start">
          <Image
            src="/icons/double_quotes.svg"
            alt="double quotes"
            width={40}
            height={40}
          />
          {slide.review}
        </p>
        <a
          href="https://yandex.ru/maps/org/kredo/69363274872/reviews"
          target="_blank"
          className="text-sm text-gray-300 lg:text-gray-200 ml-auto mt-auto tracking-[0.04em] italic"
        >
          Смотреть все отзывы
        </a>
      </div>
    </div>
  );
};

export default OneReview;
