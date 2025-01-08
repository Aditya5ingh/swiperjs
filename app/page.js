"use client";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
// import Swiper from "swiper/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import styles bundle
import "swiper/css/bundle";
export default function Home() {
  // useEffect(() => {
  // const slide = document.getElementsByClassName("slides");
  // var i = 0;
  // function addClass() {
  //   if (i >= 4) {
  //     i = 0;
  //   }
  //   document.getElementsByClassName("slides")[0].classList.add("active");
  //   console.log("active adeed to " + i);
  //   setTimeout(removeClass, 3000);
  // }
  // function removeClass() {
  //   console.log("active removed to " + i);
  //   document.getElementsByClassName("slides")[i].classList.remove("active");
  //   i++;
  // }

  // setInterval(addClass, 3000);
  // }, []);
  function handleClick(e) {
    console.log(e);
    const elemClicked = e.target.parentElement;
    for (let i = 0; i < 4; i++) {
      if (document.getElementsByClassName("slides")[i] !== elemClicked)
        document.getElementsByClassName("slides")[i].classList.remove("active");
    }
    elemClicked.classList.add("active");
  }
  return (
    <div className="slider-section w-screen h-screen">
      <div className="container w-full h-1/2 p-4">
        <Swiper
          loop={true}
          slidesPerView={9}
          spaceBetween={5}
          // on={{
          //   slideChangeTransitionStart: function () {
          //     console.log(swiper.activeIndex);
          //     const slides = document.querySelectorAll(".swiper-slide");
          //     slides.forEach((slide) => slide.classList.remove("active"));

          //     let activeIndex = swiper.activeIndex; // Active index in the Swiper instance
          //     const leftSlideIndex =
          //       (activeIndex + slides.length + 5) % slides.length;
          //     slides[leftSlideIndex].classList.add("active");
          //   },
          // }}
          // centeredSlides={true}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="right">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 8</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 9</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 8</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 9</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 8</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 9</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 8</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 9</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 8</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 9</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 8</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="right">Slide 9</div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="slider-area flex flex-nowrap w-4/5 h-2/3 gap-4">
          <div
            className="slides overflow-hidden w-1/6 active"
            onClick={handleClick}
          >
            <Image
              src="https://picsum.photos/seed/picsum/200/300"
              width="400"
              height="500"
              alt="asd"
              className="slideImg object-cover"
            ></Image>
          </div>
          <div className="slides overflow-hidden w-1/6" onClick={handleClick}>
            <Image
              src="https://picsum.photos/seed/picum/200/300"
              width="400"
              height="500"
              alt="asd"
              className="slideImg object-cover "
            ></Image>
          </div>
          <div className="slides overflow-hidden w-1/6" onClick={handleClick}>
            <Image
              src="https:/picsum.photos/seed/pisum/200/300"
              width="400"
              height="500"
              alt="asd"
              className="slideImg object-cover "
            ></Image>
          </div>
          <div className="slides overflow-hidden w-1/6" onClick={handleClick}>
            <Image
              src="https://picsum.photos/seed/icsum/200/300"
              width="400"
              height="500"
              alt="asd"
              className="slideImg object-cover "
            ></Image>
          </div>
        </div> */}
      </div>
    </div>
  );
}
