import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import icon from "../assets/react.svg";

import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { https } from "../axios";
import Card from "./Card";

function Corusel() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    https
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
      )

      .then((response) => {
        setIcons(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="relative w-full max-w-[1920px] h-[400px] mx-auto text-white mb-5">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 w-full"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/caf5/016f/97f154adfd88d0e48d9a7fc87e5ab035?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R2gcha0dHPc2VudR604fwlkVChWIUJ~YvS0cteaJXcaSz~ILkwXgk5gnHsUNL-joS8I9-EJfRkp3FC50zZZ6q6kSszMSJWYw27RjKGWwhw4mrclcliDHHXmSFZucENLkoaL30ZJ6BmAsS6eMCQdySO-OWAiy5rUua13gLNmvCWUIxRXCbtEnIhLIDqLA30mXRJFaChClMhcn2KqQff8zivK0JjAxpBiwNaWoUqhj262R-Yj8iejkjW0NzMmUrh61Z70ilwuk8jhUhaRsg3Qhx8I98~dDYNV1mIEb-bOWtQBeSl4t~JiwwyxBpZOCJdrgO~PHvbdGq3llCWZBmlVh1w__)",
        }}
      ></div>

      <div className="relative text-center mt-14 z-10 text-white f">
        <h1 className="text-[#87CEEB] font-bold text-6xl">
          CRYPTOFOLIO WATCH LIST
        </h1>
        <p className="text-[#A9A9A9] font-medium text-sm mb-5">
          Get all the Info regarding your favorite Crypto Currency
        </p>
      </div>

      <div className="relative z-20 mt-10 ml-[350px] mt-5">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          {icons.length > 0 &&
            icons.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card item={item} />
                </SwiperSlide>
              );
            })},
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Corusel;
