"use client";

import React from "react";
import Image from "next/image";

function Services() {
  const rooms = [
    { src: "/images/room1.jpg", title: "Seminar Hall 1", alt: "Room 1" },
    { src: "/images/room2.jpg", title: "Seminar Hall 2", alt: "Room 2" },
    { src: "/images/room3.jpg", title: "Seminar Hall 3", alt: "Room 3" },
  ];

  return (
    <section className="section_gap py-20 flex justify-center justify-items-center">
      <div className="container justify-items-center">
        <div className="section_title text-center mb-8">
          <h2 className="title_color text-gray-800 text-5xl font-poppins">
            Services
          </h2>
          <p className="text-gray-400 font-poppins py-5">
            We all live in an age that belongs to the young at heart. Life that
            is becoming extremely fast
          </p>
        </div>

        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <div key={index} className="text-center">
              <div className="hotel_img relative w-full h-60">
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <a className="block mt-6">
                <h4 className="sec_h4 text-2xl font-poppins font-semibold">
                  {room.title}
                </h4>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
