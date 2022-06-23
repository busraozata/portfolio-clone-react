import React from "react";
import "./Testimonials.scss";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        officiis inventore hic, perspiciatis optio omnis eum laudantium
        laborum maxime fugit dolores eaque at provident magnam atque dolorum
        adipisci qui velit.`,
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        officiis inventore hic, perspiciatis optio omnis eum laudantium
        laborum maxime fugit dolores eaque at provident magnam atque dolorum
        adipisci qui velit.`,
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        officiis inventore hic, perspiciatis optio omnis eum laudantium
        laborum maxime fugit dolores eaque at provident magnam atque dolorum
        adipisci qui velit.`,
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        officiis inventore hic, perspiciatis optio omnis eum laudantium
        laborum maxime fugit dolores eaque at provident magnam atque dolorum
        adipisci qui velit.`,
  },
];
export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper
          modules={[Pagination,Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
