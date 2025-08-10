import React from "react";
import Nav from "../components/Nav";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Main = () => {
  return (
    <main className="relative h-screen w-full">
      {/* Background */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="Netflix Background"
      />
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Navbar */}
      <div className="relative z-10">
        <Nav />
      </div>

      {/* Content */}
      <div className="relative top-18 z-10 flex flex-col items-center gap-2 text-white h-full">
        <div className="px-8 text-center">
          <h1 className="text-3xl font-bold">Unlimited movies, TV shows and more</h1>
          <p className="text-lg mb-6 px-6">Starts at ₹149. Cancel at any time.</p>
          <p className="text-lg mb-6 px-2">Ready to watch? Enter your email to create or restart your membership.</p>
        </div>

        {/* Email Input */}
        <div className="w-full px-7">
          <input
            type="text"
            placeholder="Email address"
            className="w-full mb-2 py-3 px-3 border border-white/20 rounded-md bg-white/10 text-white placeholder-white/70 backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-white/25 transition"
          />
        </div>

        {/* Get Started Button */}
        <button className="px-6 py-3 mb-14 bg-red-600 rounded-md text-lg font-semibold">
          Get Started
        </button>

        {/* Trending Section */}
        <div className="h-full w-full flex flex-col gap-8">
          <div className="line h-1 w-full bg-red-500"></div>
          <div className="p-12">
            <h5 className="text-lg font-bold mb-4">Trending Now</h5>

            {/* Swiper Slider */}
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-42 w-32 border rounded-xl bg-gray-700"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
