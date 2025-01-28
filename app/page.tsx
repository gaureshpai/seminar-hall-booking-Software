import Link from "next/link";
import GetStarted from "./components/Home/GetStarted";
import BooktheHall from "./components/Home/BooktheHall";
import Halls from "./components/Home/Halls";
import Facilities from "./components/Home/Facilities";
import AboutSection from "./components/Home/AboutSection";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/homepage.jpg')" }}
    >
      <section className="relative z-10">
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
        <div className="flex items-center justify-center min-h-screen mx-auto">
          <div className="container mx-auto text-center z-20">
            <GetStarted/>

            <BooktheHall/>
          </div>
        </div>
      </section>
      <Halls/>
      <Facilities/>
      <AboutSection/>
    </div>
  );
}