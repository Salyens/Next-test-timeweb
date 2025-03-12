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
import { MotionDiv } from "@/components/MotionDiv";
import styles from "./embla.module.css";

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
    <section className={styles.embla}>
      <div
        className={styles.embla__viewport}
        ref={emblaRef}
      >
        <div className={styles.embla__container}>
          {slides.map((slide: any) => (
            <div
              className={styles.embla__slide}
              key={slide.src}
            >
              <MotionDiv
                initial={{ opacity: 0, scale: 0.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-second-gray relative z-10 top-[60%] -translate-y-1/2 w-full lg:w-2/5 
             text-center p-4 lg:p-10 lg:left-4  "
              >
                <h2 className="text-2xl md:text-4xl font-bold pb-2 md:pb-6">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-xl">
                  {slide.description}
                </p>
              </MotionDiv>

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

      <div className={styles.embla__controls}>
        {!isMobile && (
          <div className={styles.embla__buttons}>
            <PrevButton onClick={onPrevButtonClick} />
            <NextButton onClick={onNextButtonClick} />
          </div>
        )}
        {slides.length > 1 && (
          <div className={styles.embla__dots}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={classNames(
                  styles.embla__dot,
                  index === selectedIndex
                    ? styles["embla__dot--selected"]
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
