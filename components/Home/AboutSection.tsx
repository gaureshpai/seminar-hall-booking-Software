import type React from "react"
import Image from "next/image"

const AboutSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                About Us <br />
                                Mission & Vision
                            </h2>
                            <p className="text-gray-600 mb-6">
                                To revolutionize the seminar hall booking process at AJIET by creating a seamless, efficient, and fully
                                digital platform, eliminating paperwork while fostering transparency, convenience, and accessibility for
                                all users.
                            </p>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission:</h3>
                            <ul className="list-disc list-inside text-gray-600 mb-6">
                                <li>
                                    Digitize the entire seminar hall booking process to ensure ease of access and streamlined operations.
                                </li>
                                <li>
                                    Enhance Efficiency by reducing manual errors, saving time, and cutting down on redundant paperwork.
                                </li>
                                <li>
                                    Promote Transparency by providing real-time availability, automated approval workflows, and clear
                                    records.
                                </li>
                                <li>
                                    Empower Users with a user-friendly platform that caters to diverse needs, from students to faculty and
                                    administration.
                                </li>
                                <li>
                                    Sustainability by minimizing the use of paper, contributing to AJIET&apos;s commitment to eco-friendly
                                    practices.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative w-full h-0 pb-[75%]">
                            <Image
                                src="/images/about_bg.jpg"
                                alt="About background"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection