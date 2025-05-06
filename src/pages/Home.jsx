import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

const Home = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true} 
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg hover:shadow-lg transition-all duration-300"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/27CSs9fD/slider1.jpg"
              alt="Greenish Welcome"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold">Bring Nature Home 🌿</h2>
              <p className="mt-3 text-lg md:text-xl max-w-2xl">
                Greenish Subscription Boxes curated for your indoor joy
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/B2DGY8hy/slider2.jpg"
              alt="Eco Friendly"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold">Eco-Friendly & Local 🌱</h2>
              <p className="mt-3 text-lg md:text-xl max-w-2xl">
                Support local growers with sustainable packaging
              </p>
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 3 */}

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/HfJcb38W/slider7.jpg"
              alt="Eco Friendly"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold"> Looking for a Meaningful Gift? 🎁</h2>
              <p className="mt-3 text-lg md:text-xl max-w-2xl">
              Give a living gift — a plant box that keeps growing, just like your bond.
              </p>
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/8DDc9JXz/slider4.jpg"
              alt="Eco Friendly"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold">Green Grows with Your Family 👨‍👩‍👧</h2>
              <p className="mt-3 text-lg md:text-xl max-w-2xl">
              Kid-friendly plant kits for bonding, learning, and growing together.
              </p>
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 5 */}

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/Vs2KZCc/slider3.webpg"
              alt="Eco Friendly"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold">Boost Your Mood with Nature 🌞</h2>
              <p className="mt-3 text-lg md:text-xl max-w-2xl">
              Plants help reduce stress and increase productivity — naturally.
              </p>
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 6 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/vxJ61syL/slider6.jpg"
              alt="Eco Friendly"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold">Stay Focused, Stay Green 🪴💻</h2>
              <p className="mt-3 text-lg md:text-xl max-w-2xl">
              Join your eco-loving community and turn your home into a thriving green haven.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 7 */}

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/Tq26Jd9d/corner.jpg"
              alt="Eco Friendly"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold">Tired of Dull, Empty Corners? 🪟</h2>
              <p className="mt-3 text-lg md:text-xl max-w-2xl">
              A single plant can breathe life into lifeless spaces. Let nature decorate your home.
              </p>
            </div>
          </div>
        </SwiperSlide>
        

        {/* Slide 8 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/b5prHCCJ/slider8.jpg"
              alt="Eco Friendly"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold">No Garden? No Problem 🌿</h2>
              <p className="mt-3 text-lg md:text-xl max-w-2xl">
              Compact, apartment-friendly plants designed for urban lifestyles — no yard needed!
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Home;