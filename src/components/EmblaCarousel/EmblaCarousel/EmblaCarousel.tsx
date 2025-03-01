import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import useDotButton from "../EmblaCarouselDotButton";
import { DotButton } from "../EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../EmblaCarouselArrowButtons/EmblaCarouselArrowButtons";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useDevice from "@/hooks/useDevice";
import classNames from "classnames";

interface Props {
  slides: any[];
  options: any;
  autoplay?: boolean;
}

const EmblaCarousel = (props: Props) => {
  const { slides, options, autoplay } = props;
  const { isMobile } = useDevice();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    autoplay ? [Autoplay({ delay: 5000 })] : []
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi as EmblaCarouselType);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide: any) => (
            <div className="embla__slide" key={slide.src}>
              <div
                className="bg-second-gray relative z-10 top-2/3 -translate-y-1/2 w-full lg:w-2/5 
             text-center p-4 lg:p-10 lg:left-4  "
              >
                <h2 className="text-2xl md:text-4xl font-bold pb-2 md:pb-6">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-xl">
                  {slide.description}
                </p>
              </div>
              <Image
                src={slide.src}
                alt={slide.alt}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {!isMobile && (
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} />
            <NextButton onClick={onNextButtonClick} />
          </div>
        )}
        {slides.length > 1 && (
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={classNames(
                  "embla__dot",
                  index === selectedIndex
                    ? " embla__dot--selected"
                    : ""
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmblaCarousel;
