import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import Phone from "@/components/common/Phone";
import Placemark from "@/components/common/Placemark";
import { MotionDiv } from "@/components/MotionDiv";
import classNames from "classnames";
import Button from "@/components/Button";

interface Props {
  isCollapsed?: boolean;
}

const HeaderTop = ({ isCollapsed = false }: Props) => {
  return (
    <MotionDiv
      className="border-b border-gray-200 fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm flex items-center transition-height duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <Container>
        {isCollapsed ? (
          <div className="flex items-center justify-center py-1 gap-2 lg:gap-4">
            <Link
              href="/"
              className="flex items-center gap-4 text-[22px] font-medium leading-[25px]"
            >
              <div className="relative w-6 h-6 lg:w-10 lg:h-10">
                <Image
                  src="/header/house.png"
                  alt="phone"
                  style={{ objectFit: "contain" }}
                  fill
                  sizes="(max-width: 1024px) 60px, 40px"
                  priority
                />
              </div>

              <span className="text-xs lg:text-base">
                Гостевой дом «Кредо»
              </span>
            </Link>
            <Phone className="text-xs lg:text-base" />
          </div>
        ) : (
          <div
            className={classNames(
              "flex flex-col lg:flex-row items-center justify-center py-1 gap-2 lg:gap-4 min-h-[65px]"
            )}
          >
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:w-full">
              <div className="flex items-center justify-between gap-2 w-full header-top">
                <Link
                  href="/"
                  className="flex items-center gap-4 text-[22px] font-medium leading-[25px]"
                >
                  <div className="relative w-10 h-10 xl:w-10 xl:h-10">
                    <Image
                      src="/header/house.png"
                      alt="phone"
                      style={{ objectFit: "contain" }}
                      fill
                      sizes="(max-width: 1024px) 60px, 40px"
                      priority
                    />
                  </div>
                  <p className="text-xs xl:text-base flex flex-col">
                    <span className="mr-1">
                      Гостевой дом
                    </span>
                    <span>«Кредо»</span>
                  </p>
                </Link>

                <div className="flex items-center gap-2 xl:gap-8 md:mx-auto">
                  <Placemark className="hidden lg:flex" />
                  <Phone />
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <iframe
                  src="https://yandex.ru/sprav/widget/rating-badge/69363274872"
                  width="150"
                  height="50"
                ></iframe>
                <Link
                  href="#how-to-book"
                  className="w-full px-2 py-1 text-xs md:text-base"
                >
                  <Button>Забронировать</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </MotionDiv>
  );
};

export default HeaderTop;
