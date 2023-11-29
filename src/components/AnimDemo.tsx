import React, { ReactNode } from "react";

type AnimProp = {
  shape?: "rect" | "circle";
  children?: ReactNode;
  animation?: string;
};



const AnimShape: React.FC<AnimProp> = ({ shape, animation }) => {
  const animationSlug = animation
    ?.toLowerCase()
    .trim()
    .replace(/[\s_-]+/g, "-");
  const animationClass: string = animationSlug
    ? "hover:animate-" + animationSlug
    : "";
  const shapeClass: string =
    shape === "rect"
      ? "relative w-24 h-24 bg-black rounded-md"
      : "relative w-28 h-28 bg-black rounded-full";
  const className: string = `${shapeClass} ${animationClass}`;
  console.log(className);
  return <div className={className}></div>;
};

const AnimContainer: React.FC<AnimProp> = ({ animation, children }) => {
  return (
    <div className="flex flex-col rounded-md w-48 h-48 bg-white border border-gray-200 ">
      <div className="relative flex basis-3/4 justify-center items-center overflow-hidden">
        {children}
      </div>
      <div className=" bg-gray-200 basis-1/4 flex justify-center items-center">
        <div className="font-semibold">{animation}</div>
      </div>
    </div>
  );
};

export const AnimDemo: React.FC<AnimProp> = ({ animation }) => {
  return (
    <AnimContainer animation={animation}>
      <AnimShape animation={animation} />
    </AnimContainer>
  );
};

export const GridAnimDemo: React.FC<AnimProp> = ({ children }) => {
  return <div className="">{children}</div>;
};
