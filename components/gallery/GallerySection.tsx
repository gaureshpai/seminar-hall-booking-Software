import Image from 'next/image'
import React from 'react'

const GallerySection = () => {

    const images = [
        "/images/gallery/01.jpg",
        "/images/gallery/04.jpg",
        "/images/gallery/03.jpg",
        "/images/gallery/02.jpg",
        "/images/gallery/05.jpg",
        "/images/gallery/02-1.jpg",
        "/images/gallery/01-1.jpg",
        "/images/gallery/06.jpg",
        "/images/gallery/03-1.jpg"
    ]
    return (
        <section className="py-16 mt-10 flex justify-center font-poppins">
            <div className="container w-[80rem] px-4">
                <div className="text-center mb-[50px]">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">
                        Seminar Hall Reservation System Gallery
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Who are in extremely love with eco-friendly system.
                    </p>
                </div>
                <div className="sm:columns-3 mx-[50px] columns-1 gap-10 space-y-12">
                    {images.map((src, index) => (
                        <div key={index} className={`relative w-full ${index % 2 === 0 ? "h-64" : "h-[400px]"}`}>
                            <Image
                                src={src}
                                fill
                                className="object-cover rounded-lg"
                                alt={`Gallery ${index + 1}`}
                            />
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default GallerySection