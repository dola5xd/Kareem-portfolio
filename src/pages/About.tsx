import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import AboutBox from "../components/AboutBox";
import Arrow from "../components/Arrow";

function About() {
  const parentContainerRef = useRef<HTMLDivElement>(null);
  const boxContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(boxContainerRef.current, {
        scrollTrigger: {
          trigger: boxContainerRef.current,
          start: "top top",
          end: "bottom",
          scrub: true,
        },
      });

      gsap.utils.toArray(".box").forEach((box, i) => {
        gsap.from(box as Element, {
          x: i % 2 === 1 ? 200 : -200,
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box as Element,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray(".arrow-path").forEach((path) => {
        gsap.fromTo(
          path as Element,
          { strokeDashoffset: 100 },
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: path as Element,
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: parentContainerRef }
  );

  return (
    <div
      ref={parentContainerRef}
      className="flex flex-col gap-10 px-4 py-20 about md:px-7"
    >
      {/* Heading Section */}
      <div className="flex flex-col gap-1.5 text-center">
        <h1 className="text-3xl font-bold md:text-5xl">About me</h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
          Passionate and creative, I thrive on bringing ideas to life and
          turning challenges into opportunities. Welcome to my journey!
        </p>
      </div>

      <div className="relative flex flex-col items-center ">
        <span className="text-xl text-center md:text-3xl sign-font">
          start from here!
        </span>
        <span className="pb-4 rotate-45">
          <Arrow />
        </span>

        <div
          ref={boxContainerRef}
          className="container relative flex flex-col items-center gap-6 md:gap-8 md:px-10 lg:px-20"
        >
          <AboutBox>
            I found my passion for computers and video games, which sparked my
            curiosity about technology and design.
          </AboutBox>
          <span className="pb-4 rotate-45">
            <Arrow />
          </span>
          <AboutBox>
            I pursued Computer Science at Mansoura University, where I built a
            strong foundation in programming, particularly Python.
          </AboutBox>
          <span className="pb-4 rotate-45">
            <Arrow />
          </span>
          <AboutBox>
            I transitioned into UI/UX design, mastering tools like Figma, Adobe
            XD, Photoshop, and Illustrator.
          </AboutBox>
          <span className="pb-4 rotate-45">
            <Arrow />
          </span>
          <AboutBox>
            Over the past two years, I've worked on more than 15 diverse
            projects across various industries, crafting user-centered designs.
          </AboutBox>
          <span className="pb-4 rotate-45">
            <Arrow />
          </span>
          <AboutBox>
            I'm continually learning and open to collaborating with
            professionals who are passionate about design and technology.
          </AboutBox>
        </div>

        <div className="flex flex-col w-full max-w-4xl gap-10 py-10">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl text-blue-zodiac-300 sign-font">
              My Qualifications
            </h3>
            <span className="pb-4 rotate-45">
              <Arrow color="#99cdf7" />
            </span>
            <div className="text-center flex flex-col gap-1.5">
              <h4 className="text-xl underline md:text-4xl">
                Bachelor of Computer Science
              </h4>
              <h5 className="text-lg md:text-2xl">
                Mansoura University, Egypt
              </h5>
              <span className="text-lg md:text-2xl">Sep 2019 - Jun 2033</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl text-blue-zodiac-300 sign-font">
              My Certificates
            </h3>
            <span className="pb-4 rotate-45">
              <Arrow color="#99cdf7" />
            </span>
            <div className="flex flex-col w-full gap-7">
              <div className="text-center flex flex-col gap-1.5">
                <h5 className="text-xl md:text-4xl text-pretty">
                  Foundations of User Experience (UX) Design
                </h5>
                <h4 className="text-lg md:text-3xl">
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/Y4PP9SKVZYC6"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coursera
                  </a>
                </h4>
                <span className="text-lg md:text-3xl">July 19, 2023</span>
              </div>
              <div className="text-center flex flex-col gap-1.5">
                <h5 className="text-xl md:text-4xl text-pretty">
                  Start the UX Design Process: Empathize, Define, and Ideate
                </h5>
                <h4 className="text-lg md:text-3xl">
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/JS42NP9NDU2A"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coursera
                  </a>
                </h4>
                <span className="text-lg md:text-2xl">August 17, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
