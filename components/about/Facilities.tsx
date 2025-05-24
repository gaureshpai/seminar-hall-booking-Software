import React from "react";

const Facilities = () => {
  const facilities = [
    { title: "Purpose", icon: "🍽️", desc: "Host educational and professional events." },
    { title: "Commitment to Growth", icon: "🚴", desc: "Dedicated to promoting continuous learning and development." },
    { title: "Facilities", icon: "👕", desc: "Comfortable seating, projection equipment, microphones, Wi-Fi, etc." },
    { title: "Audience Engagement", icon: "🎤", desc: "Foster interaction, networking, and learning." },
    { title: "Capacity", icon: "📏", desc: "Suitable for both small and large groups." },
    { title: "Flexibility", icon: "🛠️", desc: "Customizable setup for different types of events." },
  ];

  return (
    <section className="mb-[100px]">
      <div className="font-poppins flex justify-center  relative bg-[url(/images/facilities.jpg)] bg-no-repeat bg-fixed bg-cover bg-center">
        <div className="absolute inset-0  bg-black bg-opacity-50"></div>
        <div className="relative max-w-max mb-10 flex flex-col pb-[100px] justify-center items-center text-center text-white py-16">

          <h2 className="text-5xl  font-semibold mt-[50px] ">Facilities</h2>
          <p className="text-gray-300 mt-10 mb-[50px] text-2xl">Who are in extremely love with eco-friendly systems.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 justify-center justify-items-center gap-8 mt-12">
            {facilities.map((facility, index) => (
              <div key={index} className="flex justify-center flex-col h-[200px] w-[220px] p-6 bg-white/10 hover:scale-105 transition-all duration-100 backdrop-blur-lg border border-white/20 rounded-lg">
                <span className="font-bold mt-3 text-3xl">{facility.icon}{facility.title}</span>
                <p className="text-gray-300 mt-2">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Facilities;