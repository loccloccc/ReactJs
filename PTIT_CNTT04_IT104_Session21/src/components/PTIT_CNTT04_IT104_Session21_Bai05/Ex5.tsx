import React from "react";

export default function Ex5() {
  return (
    <div className="relative w-[300px] h-[300px] bg-blue-300">
      <div className="absolute w-[200px] h-[200px] bg-blue-400 top-13 left-13"  >
        <p>Relative parent</p>
        <div className="absolute bottom-0 left-0 w-[100px] h-[50px] bg-blue-600 text-center leading-[50px] rounded-[5px] text-white">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  );
}
