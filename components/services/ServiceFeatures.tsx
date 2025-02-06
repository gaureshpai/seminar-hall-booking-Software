import { FaCalendarCheck, FaClock, FaCheckCircle, FaUser } from "react-icons/fa";

const features = [
  {
    icon: <FaCalendarCheck className="text-blue-500 text-3xl" />,
    title: "Easy Online Booking",
    description: "Reserve spaces in just a few clicks.",
  },
  {
    icon: <FaClock className="text-green-500 text-3xl" />,
    title: "Real-Time Availability",
    description: "Check hall schedules instantly.",
  },
  {
    icon: <FaCheckCircle className="text-purple-500 text-3xl" />,
    title: "Automated Approvals",
    description: "Get instant confirmations or admin reviews.",
  },
  {
    icon: <FaUser className="text-yellow-500 text-3xl" />,
    title: "User-Friendly Dashboard",
    description: "Manage your bookings effortlessly.",
  },
];

export default function ServiceFeatures() {
  return (
    <div className="py-12 font-poppins bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Why Choose Our Service?
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-6">
          
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col hover:scale-105 hover:shadow-xl items-center hover:pl-[0.5rem] hover:pt-[0.5rem] transition-all duration-200 text-center"
              >
                {feature.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
              </div>
            ))}

        </div>
      </div>
    </div>
  );
}
