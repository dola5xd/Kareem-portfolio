import { useRef, useEffect, useState } from "react";
import Car from "../components/Car";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SanityDocument } from "@sanity/client";
import { getProjects } from "../utils/Api";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const parentContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  const [projects, setProjects] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  useGSAP(
    () => {
      if (!projectsContainerRef.current || !carRef.current) return;

      const scrollDistance =
        projectsContainerRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top 5%",
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(projectsContainerRef.current, { x: 0 }, { x: -scrollDistance });

      tl.fromTo(
        carRef.current,
        { x: "100%" },
        {
          x:
            -scrollDistance / (projects.length * 5) +
            innerWidth / 4 -
            (window.matchMedia("(min-width: 1024px)").matches
              ? 200
              : window.matchMedia("(min-width: 768px)").matches
              ? 20
              : 0),
        },
        0 // Start at the same time as projects container
      );
    },
    { scope: parentContainerRef, dependencies: [projects.length] }
  );

  console.log(
    "window.matchMedia(): ",
    window.matchMedia("(min-width: 1024px)")
  );
  console.log(window.matchMedia("(min-width: 768px)"));
  return (
    <section
      ref={parentContainerRef}
      className="relative min-h-screen pt-10 projects"
    >
      <div ref={scrollContainerRef} className="relative overflow-hidden">
        <h1 className="text-5xl text-center">My Projects</h1>
        <div className="relative w-full border-b">
          <span ref={carRef} className="block w-full car">
            <Car />
          </span>
          <span className="absolute top-0 left-0">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--gis"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M50 0a3.5 3.5 0 0 0-3.5 3.5V93h-9.57a3.5 3.5 0 0 0-3.5 3.5a3.5 3.5 0 0 0 3.5 3.5h25a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5H53.5V47h43a3.5 3.5 0 0 0 3.5-3.5v-40A3.5 3.5 0 0 0 96.5 0h-46a3.5 3.5 0 0 0-.254.01A3.5 3.5 0 0 0 50 0zm13.8 7h9.8v7.43h9.8V7H93v7.43h-9.6v9.799H93v9.8h-9.6V40h-9.8v-5.97h-9.8V40H54v-5.97h9.8v-9.801H54v-9.8h9.8V7zm0 7.43v9.799h9.8v-9.8h-9.8zm9.8 9.799v9.8h9.8v-9.8h-9.8z"
                fill="#fff"
              ></path>
            </svg>
          </span>
        </div>

        <div
          ref={projectsContainerRef}
          className="flex h-screen gap-10 md:gap-5 w-fit"
        >
          {projects.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
