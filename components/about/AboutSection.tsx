import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <section className='font-poppins m-[60px]'>
            <div className="py-16 px-6 text-center">
                <h2 className="text-5xl font-bold ">Who We Are</h2>
                <p className="mt-4 max-w-3xl text-2xl mx-auto">
                    We provide an intuitive seminar hall booking system, making it easy to
                    schedule and manage event spaces seamlessly.
                </p>
            </div>

            <div className="font-poppins  justify-items-center container  my-[80px] py-12 px-6 grid sm:grid-cols-2 grid-cols-1 ">
                <div className=' mr-20  align-top mb-10' >
                    <h2 className="text-5xl font-bold mb-4">About Us</h2>
                    <p className="text-2xl w-full text-gray-700">
                        &quot;Our seminar hall is a versatile and well-equipped space designed to host a variety of events,
                        including educational programs, dance practices, rehearsals, and other activities. With spacious
                        interiors and modern facilities, it provides an ideal environment for both professional events and creative performances.&quot;
                    </p>
                </div>
                <div className='w-auto m-1 sm:w-[400px]'>
                    <Image
                        width={600}
                        height={400}
                        src="/images/seminar-hall.jpg"
                        alt="Seminar Hall"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>
            <div className="py-16  bg-white">
                <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                    {["Easy Booking", "Real-time Availability", "User-friendly"].map((item, index) => (
                        <div key={index} className="bg-gray-200  hover:scale-95 transition-all duration-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold">{item}</h3>
                            <p className="mt-2 text-gray-600">Description about this feature.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default AboutSection