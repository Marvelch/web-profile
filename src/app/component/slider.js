"use client";

import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Slider() {
  const { data, error, isLoading } = useSWR(
    "https://api.escuelajs.co/api/v1/products",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      direction="vertical"
      mousewheel={{ releaseOnEdges: true }}
    >
      {data.slice(0, 5).map((product) => (
        <SwiperSlide key={product.id}>
          <div className="h-full flex items-center justify-center card-swiper p-4 rounded-2xl border-2 border-solid">
            <div className="flex gap-4">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={100}
                height={100}
                className="w-full object-cover mx-auto"
              />
              <h2 className="text-lg font-bold text-center mt-2">
                {product.title}
              </h2>
              <p className="text-center text-sm text-gray-600">
                ${product.price}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
