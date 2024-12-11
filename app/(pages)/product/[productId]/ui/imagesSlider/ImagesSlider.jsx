import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./style.scss";

export default function ImagesSlider({ productImages }) {
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
          {Array(8)
            .fill(null)
            .map((_, index) => {
              return (
                <>
                  <SwiperSlide>
                    <img src={`/images/image ${index + 1}.webp`} />
                  </SwiperSlide>
                </>
              );
            })}
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
          {Array(8)
            .fill(null)
            .map((_, index) => {
              return (
                <>
                  <SwiperSlide>
                    <img src={`/images/image ${index + 1}.webp`} />
                  </SwiperSlide>
                </>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
