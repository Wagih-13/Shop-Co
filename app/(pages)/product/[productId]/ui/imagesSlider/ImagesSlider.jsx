import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./style.scss";

export default function ImagesSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [height, setHeight] = useState(null);
  const displayedImage = useRef(null);

  const updateHeight = () => {
    if (displayedImage.current) {
      setHeight(displayedImage.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [displayedImage.current]);

  return (
    <>
      <div className="imageSlider">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          grabCursor={true}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          direction={window.innerWidth <= 769 ? "horizontal" : "vertical"}
          className="remainingImages"
          style={
            window.innerWidth <= 769 ? { height: "auto" } : { height: height }
          }
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <SwiperSlide>
            <img src="/images/image 1.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 4.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 5.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 6.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 7.webp" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={10}
          ref={displayedImage}
          grabCursor={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="displayedImage"
          style={{ height: "100%" }}
        >
          <SwiperSlide>
            <img src="/images/image 1.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 4.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 5.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 6.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 7.webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
