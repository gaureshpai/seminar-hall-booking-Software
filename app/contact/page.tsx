"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Seminar Hall Reservation System</title>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>
      <div>
        <section className="breadcrumb_area relative bg-cover bg-top" style={{ backgroundImage: "url('/images/facilities.jpg')" }}>
          <div className="overlay bg-yellowyy opacity-70 absolute inset-0"></div> {/* Increase opacity to dim the background image more */}
          <div className="container mx-auto py-6 text-center relative z-10"> {/* Reduce the height by decreasing the padding */}
            <h2 className="text-3xl font-bold text-white">Contact Us</h2>
            <ol className="breadcrumb flex justify-center mt-4">
              <li><a href="/" className="text-white">Home</a></li>
              <li className="text-white mx-2">&#8594;</li>
              <li className="text-white">Contact Us</li>
            </ol>
          </div>
        </section>

        <section className="contact_area py-20">
          <div className="container mx-auto">
            <div id="mapBox" className="mapBox w-full h-80 mb-32 flex justify-center"> {/* Increased height and gap below the map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.883682578107!2d74.82619107507549!3d12.915196787395066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a7940000001%3A0x37b1d2f42900de85!2sAJ%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1738516545679!5m2!1sen!2sin"
                width="1000"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full flex justify-center">
              <div className="flex w-full max-w-5xl flex-wrap justify-between text-gray-500"> {/* Set max-width to 1000px and set text color */}
                <div className="w-1/3"> {/* First Column */}
                  <div className="info_item flex items-center mb-2 text-sm"> {/* Reduced font size */}
                    <i className="lnr lnr-home text-xl text-yellow-500 mr-2"></i> {/* Reduced icon size */}
                    <div>
                      <p className="text-sm">AJ INSTITUTE OF ENGINEERING & TECHNOLOGY</p>
                      <p className="text-xs">Mangaluru</p> {/* Reduced font size */}
                    </div>
                  </div>
                  <div className="info_item flex items-center mb-2 text-sm"> {/* Reduced font size */}
                    <i className="lnr lnr-phone-handset text-xl text-yellow-500 mr-2"></i> {/* Reduced icon size */}
                    <div>
                      <p className="text-sm">0824 2455048</p>
                      <p className="text-xs">Mon to Sat 9am to 5pm</p> {/* Reduced font size */}
                    </div>
                  </div>
                  <div className="info_item flex items-center mb-2 text-sm"> {/* Reduced font size */}
                    <i className="lnr lnr-envelope text-xl text-yellow-500 mr-2"></i> {/* Reduced icon size */}
                    <div>
                      <p className="text-sm">support@Enigma.com</p>
                      <p className="text-xs">Send us your query anytime!</p> {/* Reduced font size */}
                    </div>
                  </div>
                </div>
                <div className="w-1/3"> {/* Second Column */}
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="mb-2 px-2" style={{ height: 'calc(33% - 0.5rem)', paddingBottom: '0.5rem' }}> {/* Adjusted height */}
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control w-full border border-gray-300 p-2 rounded-md text-sm" /* Reduced font size */
                              id="name"
                              name="name"
                              placeholder="Enter your name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="mb-2 px-2" style={{ height: 'calc(33% - 0.5rem)', paddingBottom: '0.5rem' }}> {/* Adjusted height */}
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control w-full border border-gray-300 p-2 rounded-md text-sm" /* Reduced font size */
                              id="email"
                              name="email"
                              placeholder="Enter email address"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2" style={{ height: 'calc(33% - 0.5rem)', paddingBottom: '0.5rem' }}> {/* Adjusted height */}
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control w-full border border-gray-300 p-2 rounded-md text-sm" /* Reduced font size */
                              id="subject"
                              name="subject"
                              placeholder="Enter Subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-1/3"> {/* Third Column */}
                  <div className="form-group mb-4 px-2" style={{ height: 'calc(100% - 0.6rem)' }}> {/* Adjusted height */}
                    <textarea
                      className="form-control w-full border border-gray-300 p-2 rounded-md text-sm" /* Reduced font size */
                      id="message"
                      name="message"
                      style={{ height: '100%' }} /* Ensure height matches */
                      placeholder="Enter Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="w-full text-right mt-2 px-2"> {/* Adjusted margin top */}
                    <button type="submit" className="primary-btn bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-700 text-sm"> {/* Reduced button font size */}
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
