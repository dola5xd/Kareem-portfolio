import { Dispatch, SetStateAction } from "react";

function HamburgerMenu({
  openMenu,
  setMenu,
}: {
  openMenu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`md:hidden flex flex-col cursor-pointer gap-y-1.5 *:block *:bg-primary-50 *:h-1 *:w-7 *:duration-500 z-10 *:hover:bg-secondary-500`}
      onClick={() => setMenu((prev) => !prev)}
    >
      <span className={`${openMenu ? "rotate-45 translate-y-5" : ""}`}></span>
      <span className={`${openMenu ? "opacity-0" : ""}`}></span>
      <span className={`${openMenu ? "-rotate-45" : ""}`}></span>
    </div>
  );
}

export default HamburgerMenu;
