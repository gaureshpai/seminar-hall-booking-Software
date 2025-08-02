"use client";

import React from "react";
import Image from "next/image";

function Services() {
    return (
        <section className="section_gap py-20 flex justify-center justify-items-center">
            <div className="container justify-items-center">
                <div className="section_title text-center mb-8 ">
                    <h2 className="title_color text-gray-800 text-5xl font-poppins">Services</h2>
                    <p className="text-gray-400 font-poppins py-5">We all live in an age that belongs to the young at heart. Life that is becoming extremely fast</p>
                </div>
                <div className=" py-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className=" text-center ">
                        <div className="hotel_img relative">
                            <div className="hotel_img relative w-full h-60">
                                <Image
                                    src="/images/room1.jpg"
                                    alt="Seminar Hall 3"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <a className="block mt-6">
                            <h4 className="sec_h4 text-2xl font-poppins font-semibold">Seminar Hall 1</h4>
                        </a>

                    </div>
                    <div className="text-center">
                        <div className="hotel_img relative w-[260px] h-60">
                            <Image
                                src="/images/room3.jpg"
                                alt="Seminar Hall 3"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <a rel="noopener noreferrer" className="block mt-6">
                            <h4 className="sec_h4 text-2xl font-poppins font-semibold">Seminar Hall 2</h4>
                        </a>

                    </div>

                    <div className="text-center">
                        <div className="hotel_img relative w-full h-60">
                            <Image
                                src="/images/room3.jpg"
                                alt="Seminar Hall 3"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <a rel="noopener noreferrer" className="block mt-6">
                            <h4 className="c_h4 text-2xl font-poppins font-semibold">Seminar Hall 3</h4>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services