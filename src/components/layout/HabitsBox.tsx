import React from "react";

interface Props {
  habit: string;
  percentage: string;
  coloredText: string;
  defaultText: string;
}

const HabitsBox: React.FC<Props> = ({
  habit,
  percentage,
  coloredText,
  defaultText,
}) => {
  return (
    <div className="w-full p-5 bg-darker rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="text-[16px] font-semibold text-base">
        <span className="text-base text-primary">{coloredText}</span>
        {defaultText} <br />
      </div>
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="text-center text-white text-5xl font-bold ">
          {habit}
        </div>
        <div className="px-2 py-0.5 rounded-lg border border-primary justify-center items-center gap-1">
          <div className="text-center text-primary text-xl font-bold">
            <img
              src="public/arrowhabit.svg"
              alt="arrow"
              className="inline-flex w-[19px] h-5 items-center justify-center"
            />{" "}
            {percentage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitsBox;
