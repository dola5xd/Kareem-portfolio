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
    <section className="relative min-h-screen px-10 py-10">
      <h2 className="mb-10 text-5xl font-bold text-center text-white">
        My Projects
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        grabCursor
        autoplay={{
          delay: 5000,
        }}
        loop
        className="w-full px-4"
      >
        {projects.map((project) => (
          <SwiperSlide key={project._id} className="!h-auto">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="absolute bottom-0 left-0 block w-full h-1/3 bg-gradient-to-t from-blue-zodiac-800 via-transparent to-transparent" />
    </section>
  );
}
