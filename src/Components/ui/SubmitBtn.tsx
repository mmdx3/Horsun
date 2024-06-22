import React from "react";

const SubmitBtn = ({ text }: { text: string }) => {
  return (
    <input
      type="submit"
      value={text}
      className="w-[278px] lg:w-[306px] h-10 rounded-lg bg-[#D51F26] flex justify-center items-center gap-1 p-2 cursor-pointer text-white font-dana text-sm"
    />
  );
};

export default SubmitBtn;
