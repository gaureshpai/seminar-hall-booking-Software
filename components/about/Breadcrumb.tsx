import React from 'react'

const Breadcrumb = () => {
  return (
    <section
      className="relative h-[50vh] bg-cover bg-center justify-items-center"
      style={{ backgroundImage: "url('/images/facilities.jpg')" }}
    >
      <div className="container relative z-10 flex h-full flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white">About</h2>
        <ol className="flex items-center space-x-2 mt-4">
          <li>
            <a href="/" className="text-white font-bold">
              Home
            </a>
          </li>
          <li className="text-white font-bold">→</li>
          <li className="text-white font-bold">About</li>
        </ol>
      </div>
    </section>
  )
}

export default Breadcrumb