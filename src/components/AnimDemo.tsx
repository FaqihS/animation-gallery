import React from "react";
import { AnimKey, animations } from "../utils/data";

type AnimProp = {
  animation?: string;
};

const AnimShape: React.FC<AnimProp> = ({ animation }) => {
  let className: string =  "w-28 h-28 bg-violet-800 rounded-md "
  if (animation) className += animations[animation as AnimKey];
  return <div className={className}></div>;
};

const AnimDemo: React.FC<AnimProp> = ({ animation }) => {
  return (
    <div className="flex flex-col rounded-md w-48  h-48 bg-white border border-gray-200 ">
      <div className= "flex basis-3/4 group justify-center items-center overflow-hidden ">
        <AnimShape animation={animation} />
      </div>
      <div className=" bg-gray-200 basis-1/4 flex justify-center items-center">
        <div className="font-semibold">{animation}</div>
      </div>
    </div>
  );
};


export const GridAnimDemo: React.FC<AnimProp> = () => {
    return <div className="grid grid-cols-4 gap-10 place-items-center w-3/4">
      {Object.entries(animations).map(([anim]) => (
        <AnimDemo animation={anim} />
      ))}
    </div>
};
