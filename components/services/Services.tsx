import React from 'react'

function Services() {
  return (
    <section className="section_gap py-20 justify-items-center">
        <div className="container justify-items-center">
            <div className="section_title text-center mb-8 ">
                <h2 className="title_color text-gray-800 text-5xl font-poppins">Services</h2>
                <p className="text-gray-400 font-poppins py-5">We all live in an age that belongs to the young at heart. Life that is becoming extremely fast</p>
            </div>
            <div className=" py-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className=" text-center ">
                    <div className="hotel_img relative">
                        <img src="/images/room1.jpg" alt="room image" className="w-full h-120 object-cover rounded-lg " />
                        <a rel="noopener noreferrer" href="#" className="btn theme_btn font-poppins button_hover absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">BOOK NOW</a>

                    </div>
                    <a href="#" className="block mt-6">
                        <h4 className="sec_h4 text-2xl font-poppins font-semibold">Seminar Hall 1</h4>
                    </a>
                   
                </div>
                <div className="text-center">
                    <div className="hotel_img relative">
                        <img src="/images/room2.jpg" alt="room image" className="w-full h-120 object-cover rounded-lg" />
                        <a rel="noopener noreferrer" href="#" className="btn theme_btn font-poppins button_hover absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out  px-6 py-3 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">BOOK NOW</a>

                    </div>
                    <a rel="noopener noreferrer" href="#" className="block mt-6">
                        <h4 className="sec_h4 text-2xl font-poppins font-semibold">Seminar Hall 2</h4>
                    </a>
                    
                </div>

                <div className="text-center">
                    <div className="hotel_img relative">
                        <img src="/images/room3.jpg" alt="room image" className="w-full h-120 object-cover rounded-lg" />
                        <a rel="noopener noreferrer" href="#" className="btn theme_btn font-poppins g button_hover absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">BOOK NOW</a>

                    </div>
                    <a rel="noopener noreferrer" href="#" className="block mt-6">
                        <h4 className="c_h4 text-2xl font-poppins font-semibold">Seminar Hall 3</h4>
                    </a>
                </div>

              
            </div>
            
        </div>
    </section>

  )
}

export default Services
