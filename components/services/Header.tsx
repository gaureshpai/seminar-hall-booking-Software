import React from 'react'

function Header() {
  return (
    <header className="absolute w-full z-[2] left-0 top-0">
        <div className="container mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light flex items-center justify-between">
                <a className="navbar-brand logo_h" href="index.html">
                    <img src="/images/logo.png" alt="logo" className="w-auto h-8" />
                </a>
                <button type="button" className="navbar-toggler lg:hidden" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="icon-bar block w-6 h-0.5 bg-gray-600 mb-1"></span>
                    <span className="icon-bar block w-6 h-0.5 bg-gray-600 mb-1"></span>
                    <span className="icon-bar block w-6 h-0.5 bg-gray-600"></span>
                </button>
                <div className="collapse navbar-collapse offset hidden lg:block" id="navbarSupportedContent">
                    <ul className="nav navbar-nav menu_nav ml-auto flex space-x-6">
                        <li className="nav-item"><a className="nav-link text-gray-700 hover:text-blue-600" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-gray-700 hover:text-blue-600" href="about.html">About us</a></li>
                        <li className="nav-item active"><a className="nav-link text-blue-600" href="Acc.html">Services</a></li>
                        <li className="nav-item"><a className="nav-link text-gray-700 hover:text-blue-600" href="gallery.html">Gallery</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    )
}

export default Header
