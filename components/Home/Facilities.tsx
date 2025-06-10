import React from 'react';
import { Briefcase, Cog, Home, Layers, MapPin, Monitor } from 'lucide-react';

const facilities = [
    { icon: <Monitor className="w-8 h-8" />, title: 'Modern Technology', description: 'Equipped with advanced audio-visual systems for seamless presentations.' },
    { icon: <Cog className="w-8 h-8" />, title: 'Comfortable Seating', description: 'Ergonomic seating ensures a comfortable experience for participants.' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Professional Ambiance', description: 'Creates an ideal setting for academic and professional gatherings.' },
    { icon: <Layers className="w-8 h-8" />, title: 'Flexible Layout', description: 'Adaptable seating arrangements to suit different event requirements.' },
    { icon: <MapPin className="w-8 h-8" />, title: 'Accessibility', description: 'Convenient location within the campus, with easy access for all attendees.' },
    { icon: <Home className="w-8 h-8" />, title: 'Spacious and Versatile', description: 'Accommodates various events like seminars, workshops, and conferences.' },
];

const Facilities: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900 text-white relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/facilities.jpg')" }}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Amenities</h2>
                    <p className="text-gray-400">Accommodates various events like seminars, workshops, and conferences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center h-64 transition-transform duration-300 hover:scale-105">
                            <div className="text-yellow-400 mb-4">
                                {facility.icon}
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{facility.title}</h4>
                            <p className="text-gray-400 text-center">{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;