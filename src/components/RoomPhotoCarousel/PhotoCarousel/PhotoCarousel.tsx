import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useDevice from "@/hooks/useDevice";
import classNames from "classnames";
import {
  DotButton,
  useDotButton,
} from "@/components/EmblaCarousel/EmblaCarouselDotButton/EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/EmblaCarousel/EmblaCarouselArrowButtons/EmblaCarouselArrowButtons";
import { PhotoDot } from "../PhotoDot/PhotoDot";

interface Props {
  slides: any[];
  options: any;
  autoplay?: boolean;
}

const PhotoCarousel = (props: Props) => {
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
            <div
              className="relative min-w-full h-[500px]"
              key={slide.id}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                style={{ objectFit: "cover" }}
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
          <div className="mt-4 flex gap-2 overflow-auto">
            {slides.map((slide, index) => (
              <PhotoDot
                key={index}
                onClick={() => onDotButtonClick(index)}
                slide={slide}
                className={classNames(
                  "w-[60px] h-full",
                  index === selectedIndex
                    ? "border-4 border-secondary"
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

export default PhotoCarousel;
