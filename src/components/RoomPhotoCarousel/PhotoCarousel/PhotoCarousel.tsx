import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useDevice from "@/hooks/useDevice";
import classNames from "classnames";
import {
  useDotButton,
} from "@/components/EmblaCarousel/EmblaCarouselDotButton/EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/EmblaCarousel/EmblaCarouselArrowButtons/EmblaCarouselArrowButtons";
import { PhotoDot } from "../PhotoDot/PhotoDot";
import styles from "./photocarousel.module.css";
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

  const { selectedIndex, onDotButtonClick } =
    useDotButton(emblaApi);

  const { onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi as EmblaCarouselType);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide: any) => (
            <div
              className="relative min-w-full h-[460px] sm:h-[580px] md:h-[600px]"
              key={slide}
            >
              <Image
                src={slide}
                alt={slide}
                style={{ objectFit: "contain" }}
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
          <div className="flex justify-center items-center gap-2 mt-4 overflow-x-auto">
            {slides.map((slide, index) => (
              <PhotoDot
                key={slide}
                onClick={() => onDotButtonClick(index)}
                slide={slide}
                className={classNames(
                  "w-16 h-16 overflow-hidden",
                  index === selectedIndex
                    ? " border-4 border-secondary"
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
