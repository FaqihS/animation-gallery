import React from "react";
import { AnimKey, animations } from "../utils/data";

interface AnimProp  {
  animation?: AnimKey;
};


const AnimShape: React.FC<AnimProp> = ({ animation }) => {
  let className: string =  "w-28 h-28 bg-violet-800 rounded-md drop-shadow-xl "
  if (animation) className += animations[animation];
  return <div className={className}></div>;
};

const AnimDemo: React.FC<AnimProp> = ({ animation }) => {
  return (
    <div className="flex flex-col drop-shadow-sm rounded-md w-48  h-48 bg-white border border-gray-100 overflow-hidden">
      <div className= "flex basis-4/5 group justify-center items-center overflow-hidden ">
        <AnimShape animation={animation} />
      </div>
      <div className=" bg-gray-200 basis-1/5  flex justify-center items-center">
        <div className="text-sm font-medium">{animation}</div>
      </div>
    </div>
  );
};


export const GridAnimDemo: React.FC = () => {
    return <div className="animate-slide-in-bottom  grid self-center grid-cols-4 gap-10 place-items-center ">
      {Object.entries(animations).map(([anim]) => (
        <AnimDemo animation={anim as AnimKey} />
      ))}
    </div>
};
