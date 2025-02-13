import { useState, useRef } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Header() {
  const [openMenu, setMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      if (openMenu) {
        gsap.fromTo(
          menuRef.current,
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.7, ease: "power2.out" }
        );
      } else {
        gsap.to(menuRef.current, {
          x: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [openMenu] }
  );

  return (
    <header className="relative z-10 flex items-center justify-between py-7 px-7 md:px-20">
      <h3 className="text-4xl lg:text-5xl logo animate-pulse">Kareem</h3>
      <ul className="items-center justify-between hidden text-2xl cursor-pointer md:flex gap-x-7">
        <li
          onClick={() => {
            setMenu(false);
            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: ".about",
                offsetY: 0,
              },

              ease: "power2.inOut",
            });
          }}
        >
          About me
        </li>
        <li
          onClick={() => {
            setMenu(false);

            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: ".projects",
                offsetY: 0,
              },

              ease: "power2.inOut",
            });
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            setMenu(false);
            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: ".contact",
                offsetY: 0,
              },

              ease: "power2.inOut",
            });
          }}
        >
          Contact me
        </li>
      </ul>
      <HamburgerMenu setMenu={setMenu} openMenu={openMenu} />
      <ul
        ref={menuRef}
        className={`fixed top-0 left-0 flex-col w-screen justify-center h-screen gap-10 pl-20 sm:pl-32 py-10 bg-primary-800 *:text-5xl *:cursor-pointer *:duration-500 hover:*:translate-x-4 hover:*:text-blue-zodiac-500 hover:*:before:border-blue-zodiac-500 hover:*:after:border-blue-zodiac-500 *:uppercase *:before:content-[''] *:relative *:before:block *:before:border-r-[5px] *:before:border-b-[5px] *:before:border-primary-50 *:before:h-7 *:before:w-7 *:before:absolute *:before:-left-14 *:before:duration-500 *:before:top-1/2 *:before:-translate-y-1/2 *:before:-rotate-45 *:after:content-[''] *:after:block *:after:border-r-[5px] *:after:border-b-[5px] *:after:border-primary-50 *:after:h-7 *:after:w-7 *:after:absolute *:after:-left-20 *:after:top-1/2 *:after:duration-500 *:after:-translate-y-1/2 *:after:-rotate-45 ${
          openMenu ? "flex" : "hidden"
        }`}
      >
        <li
          onClick={() => {
            setMenu(false);
            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: ".about",
                offsetY: 0,
              },

              ease: "power2.inOut",
            });
          }}
        >
          About me
        </li>
        <li
          onClick={() => {
            setMenu(false);

            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: ".projects",
                offsetY: 0,
              },

              ease: "power2.inOut",
            });
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            setMenu(false);
            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: ".contact",
                offsetY: 0,
              },

              ease: "power2.inOut",
            });
          }}
        >
          Contact me
        </li>
      </ul>
    </header>
  );
}

export default Header;
