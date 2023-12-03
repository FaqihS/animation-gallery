import React, { useEffect,  useState } from "react";

type SmokyProp = {
  position?: string;
};

export const Navbar: React.FC = () => {
  return (
    <nav className="animate-slide-in-top sticky top-0 z-50 h-12 bg-[#ffffff40] backdrop-blur-sm flex items-center justify-between px-6">
      <div>Animation Gallery</div>
      <li className="list-none">
        <ul>Some thing</ul>
      </li>
    </nav>
  );
};


export const Hero: React.FC = () => {
  const [titleClass, setTitleClass] = useState<string>(
    "font-bold text-3xl text-transparent"
  );
  const [textClass, setTextClass] = useState<string>("text-transparent");

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setTitleClass("font-bold text-3xl text-black animate-fade-in-up");
      const textTimeout = setTimeout(() => {
        setTextClass("text-gray-400 animate-fade-in-up");
      }, 600);
      return () => clearTimeout(textTimeout);
    }, 700);
    return () => clearTimeout(titleTimeout);
  }, []);

  return (
    <div className="text-center ">
      <h1 className={titleClass}> 
        Animation Gallery
      </h1>
      <p className={textClass}>
        Enjoy list of Animation using Tailwind Css
      </p>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <div className="text-center relative h-12 mt-24">
      <p className="text-gray-400">
        by <span className="text-black">Fshou</span>
      </p>
    </div>
  );
};

export const SmokyAddon: React.FC<SmokyProp> = ({ position }) => {
  const positionClass =
    position === "bottom"
      ? "absolute bottom-0 right-50 blur-3xl"
      : "absolute top-10 blur-3xl";

  const divStyle: React.CSSProperties = {
    clipPath: "polygon(27% 24%, 64% 0, 100% 51%, 60% 29%, 13% 66%, 12% 0)",
    WebkitClipPath:
      "polygon(27% 24%, 64% 0, 100% 51%, 60% 29%, 13% 66%, 12% 0)",
  };
  return (
    <div className={positionClass}>
      <div
        style={divStyle}
        className="w-[700px] h-[400px] absolute from-[#6E237540] to-[#3E2CC660] bg-gradient-to-r  "
      ></div>
    </div>
  );
};
