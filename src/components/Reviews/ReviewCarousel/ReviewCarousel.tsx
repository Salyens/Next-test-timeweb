"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useDevice from "@/hooks/useDevice";
import {
  DotButton,
  useDotButton,
} from "@/components/EmblaCarousel/EmblaCarouselDotButton/EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/EmblaCarousel/EmblaCarouselArrowButtons/EmblaCarouselArrowButtons";
import Image from "next/image";
import OneReview from "../OneReview";

interface Props {
  slides: any[];
  options: any;
  autoplay?: boolean;
}

const ReviewCarousel = (props: Props) => {
  const { slides, options, autoplay } = props;
  const { isMobile } = useDevice();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    autoplay ? [Autoplay({ delay: 5000 })] : []
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const groupSlides = (slides: any[]) => {
    const grouped = [];
    for (let i = 0; i < slides.length; i += 2) {
      grouped.push(slides.slice(i, i + 2));
    }
    return grouped;
  };

  const slidesToRender = isMobile
    ? slides
    : groupSlides(slides);

  return (
    <section className="embla review-carousel">
      {!isMobile && (
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} />
          <NextButton onClick={onNextButtonClick} />
        </div>
      )}

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {isMobile ? (
            <>
              {slides.map((slide: any) => (
                <div
                  className="embla__slide"
                  key={slide.id}
                >
                  <OneReview key={slide.id} slide={slide} />
                </div>
              ))}
            </>
          ) : (
            <>
              {slidesToRender.map(
                (slideGroup: any, groupIndex: number) => (
                  <div
                    className="embla__slide "
                    key={`group-${groupIndex}`}
                  >
                    {slideGroup.map((slide: any) => (
                      <OneReview
                        key={slide.id}
                        slide={slide}
                      />
                    ))}
                  </div>
                )
              )}
            </>
          )}
        </div>
      </div>

      <div className="embla__controls review-carousel">
        {slides.length > 1 && (
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
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

export default ReviewCarousel;
