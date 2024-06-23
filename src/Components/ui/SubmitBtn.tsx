import React from "react";

interface Iprops {
  text: string;
  width?: string;
  smWidth?: string;
}

const SubmitBtn = (props: Iprops) => {
  return (
    <input
      type="submit"
      value={props.text}
      className={`w-[${props.smWidth ? props.smWidth : "278px"}] lg:w-[${
        props.width ? props.width : "306px"
      }] h-10 rounded-lg bg-[#D51F26] flex justify-center items-center gap-1 p-2 cursor-pointer text-white font-dana text-sm`}
    />
  );
};

export default SubmitBtn;
