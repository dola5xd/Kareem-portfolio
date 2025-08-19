import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getProjects } from "../utils/Api";
import { SanityDocument } from "@sanity/client";
import ProjectCard from "../components/ProjectCard";

const projectsFetch = getProjects();

export default function Projects() {
  const projects = use<SanityDocument[]>(projectsFetch);

  return (
    <section className="relative min-h-screen px-4 py-10 sm:px-6 lg:px-12">
      <h2 className="mb-10 text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl lg:text-5xl">
        My Projects
      </h2>

      <Swiper
        modules={[Autoplay]}
        grabCursor
        loop
        autoplay={{ delay: 5000 }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 }, // phones
          640: { slidesPerView: 1 }, // small tablets
          768: { slidesPerView: 2, spaceBetween: 20 }, // tablets
          1024: { slidesPerView: 3, spaceBetween: 25 }, // laptops
          1440: { slidesPerView: 4, spaceBetween: 30 }, // large screens
        }}
        className="w-full px-2"
      >
        {projects.map((project) => (
          <SwiperSlide key={project._id} className="!h-auto">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* subtle gradient overlay for nice fade */}
      <span className="absolute bottom-0 left-0 block w-full h-1/3 bg-gradient-to-t from-blue-zodiac-800 via-transparent to-transparent" />
    </section>
  );
}
