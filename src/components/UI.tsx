import React  from "react";

type SmokyProp = {
  position?: string;
};

export const Navbar: React.FC = () => {
  return (
    <nav className="animate-slide-in-top sticky top-0 z-50 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-between px-6">
      <div className="font-medium">
        <span className="text-gray-400">Animation</span>Gallery
      </div>
      <li className="list-none">
        <ul className="bg-slate-300/30 hover:bg-slate-300 rounded-md border px-4 py-1 ">
          <a href="#" className="font-semibold">
            Github
          </a>
        </ul>
      </li>
    </nav>
  );
};

export const Hero: React.FC = () => {
  return (
    <div className="text-center ">
      <h1 className="font-bold text-3xl text-black animate-fade-in-up  [animation-delay:600ms]">Animation Gallery</h1>
      <p className="text-gray-400 animate-fade-in-up  [animation-delay:1200ms]">Enjoy list of Animation using Tailwind Css</p>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <div className="text-center h-12 mt-24 ">
      <p className="text-gray-400">
        by <span className="text-black">F.Shou</span>
      </p>
    </div>
  );
};

export const SmokyAddon: React.FC<SmokyProp> = ({ position }) => {
  const positionClass =
    position === "bottom"
      ? "absolute bottom-80 -right-40 blur-3xl rotate-[15deg] animate-fade-in  [animation-delay:800ms]"
      : "absolute -left-40 top-40 rotate-[15deg] blur-3xl animate-fade-in  [animation-delay:800ms]";

  const divStyle: React.CSSProperties = {
    clipPath: "polygon(27% 24%, 64% 0, 100% 51%, 60% 29%, 13% 66%, 12% 0)",
    WebkitClipPath:
      "polygon(27% 24%, 64% 0, 100% 51%, 60% 29%, 13% 66%, 12% 0)",
  };
  return (
    <div className={positionClass}>
      <div
        style={divStyle}
        className="w-[700px] h-[400px] from-[#A369BCf0] to-[#7AA2F7f0] bg-gradient-to-r  "
      ></div>
    </div>
  );
};
