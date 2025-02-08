import React from 'react'

const GallerySection = () => {
 
    const images = [
        "http://127.0.0.1:5500/Dev%20Works/image/gallery/01.jpg",
        "http://127.0.0.1:5500/Dev%20Works/image/gallery/04.jpg",
        "http://127.0.0.1:5500/Dev%20Works/image/gallery/03.jpg",
        "http://127.0.0.1:5500/Dev%20Works/image/gallery/02.jpg",
        "http://127.0.0.1:5500/Dev%20Works/image/gallery/05.jpg",
        "http://127.0.0.1:5500/Dev%20Works/image/gallery/02-1.jpg",
        "http://127.0.0.1:5500/Dev%20Works/image/gallery/01-1.jpg",
        "http://127.0.0.1:5500/Dev%20Works/image/gallery/06.jpg",
        "http://127.0.0.1:5500/Dev%20Works/image/gallery/03-1.jpg",
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
            <div className="sm:columns-3 mx-[40px] columns-1 gap-10 space-y-12">
                {images.map((src, index) => (
                    <img
                    key={index}
                    src={src}
                    className={`${index % 2 === 0 ? "h-64" : "h-100"} w-full object-cover rounded-lg`}
                    alt={`Gallery ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default GallerySection
