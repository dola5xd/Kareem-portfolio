import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { BsBehance, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";

function Hero() {
  const parentContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".avatar", {
        scale: 0,
        y: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: parentContainerRef.current,
          start: "top center",
          end: "bottom 25%",
          toggleActions: "play reverse play play",
        },
      });

      gsap.from(".text ,.text span", {
        scale: 0,
        opacity: 0,
        x: -500,
        stagger: 0.5,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: parentContainerRef.current,
          start: "top center",
          end: "bottom 25%",
          toggleActions: "play reverse play play",
        },
      });

      gsap.from(".links button,.links ul,.scrollDown", {
        scale: 0,
        opacity: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: parentContainerRef.current,
          start: "top center",
          end: "bottom 25%",
          toggleActions: "play reverse play play",
        },
      });

      gsap.utils.toArray(".arrow-path").forEach((path) => {
        gsap.fromTo(
          path as Element,
          { strokeDashoffset: 100 },
          {
            strokeDashoffset: 0,
            duration: 2,
            delay: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: parentContainerRef.current,
              start: "top center",
              end: "bottom 25%",
              toggleActions: "play reverse play play",
            },
          }
        );
      });
    },
    { scope: parentContainerRef }
  );
  return (
    <section
      ref={parentContainerRef}
      className="relative flex flex-col md:flex-row-reverse items-center min-h-screen gap-14 md:justify-between sm:gap-10 overflow-hidden px-7 md:px-20 z-[1] md:-translate-y-20"
    >
      <div className="relative rounded-full md:w-1/3 aspect-square avatar">
        <img
          src="/avatar.webp"
          className="object-cover rounded-full pointer-events-none select-none aspect-square"
          alt="Vector art for girl created by me!"
        />
      </div>
      <div className="flex flex-col w-full gap-4 md:w-1/2">
        <h1 className="flex flex-col text-5xl lg:text-7xl text">
          Hi, I Am <span className="text-blue-zodiac-500">Kareem Yasser</span>
        </h1>
        <div className="flex items-center justify-between md:items-start md:gap-7 md:flex-col links">
          <a
            rel="noopener"
            href="https://drive.google.com/drive/folders/1A8ij6Y_x5iRO80Lbc1Wfbb7xJvr2p_WN"
            target="_blank"
            className="px-5 py-2 relative text-2xl lg:text-3xl rounded ring-1 ring-blue-zodiac-500 after:block after:content-[''] after:absolute after:w-full after:h-full after:bg-blue-zodiac-500 after:top-0 after:left-0 after:duration-500 hover:after:opacity-100 after:opacity-0 after:z-[1] bg-transparent hover:after:translate-x-1 hover:after:-translate-y-1"
          >
            <button type="button" className="z-[2] relative">
              My Resume
            </button>
          </a>
          <ul className="flex items-center gap-3">
            <li>
              <a
                title="my linkedin"
                rel="noopener"
                href="https://www.linkedin.com/in/kareem-yasser-94712222b/"
                target="_blank"
              >
                <BsLinkedin size={20} />
              </a>
            </li>
            <li>
              <a
                title="my linkedin"
                rel="noopener"
                href="https://www.behance.net/kareemyasser5"
                target="_blank"
              >
                <BsBehance size={20} />
              </a>
            </li>
            <li>
              {" "}
              <a
                title="my linkedin"
                rel="noopener"
                href="https://www.instagram.com/kimooo.y/"
                target="_blank"
              >
                <BsInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
        <button
          title="scrollDown"
          type="button"
          className="absolute hidden px-1 py-3 text-xl text-center md:block left-1/2 bottom-24 lg:bottom-7 animate-bounce rounded-xl ring-1 ring-blue-zodiac-500 scrollDown"
          onClick={() =>
            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: ".about",
                offsetY: 0,
              },

              ease: "power2.inOut",
            })
          }
        >
          <FaArrowDownLong />
        </button>
      </div>
    </section>
  );
}

export default Hero;
