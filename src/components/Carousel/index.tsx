import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import "./carousel.scss";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src="/welcome/welcome-1.jpg"
            alt="carousel-1"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className="embla__slide">
          <Image
            src="/welcome/welcome-1.jpg"
            alt="carousel-1"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className="embla__slide">
          <Image
            src="/welcome/welcome-1.jpg"
            alt="carousel-1"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        <Image
          src="/icons/prev.png"
          alt="arrow-right"
          width={40}
          height={40}
        />
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <Image
          src="/icons/next.png"
          alt="arrow-right"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
};

export default Carousel;
