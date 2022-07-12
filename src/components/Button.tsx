import React from "react";

interface IProps {
  type: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = ({ type, children }: IProps) => {
  const vals = {
    primary: "bg-purple-700 text-white",
    secondary: "bg-transparent rounded-lg text-gray-700",
  };
  const classes = `text-lg hover:bg-gray-100 mr-10 py-2 px-4 cursor-pointer ${vals[type]}`;
  return (
    <div className="text-sm font-semibold ml-10 py-[14px] px-6 cursor-pointer rounded-lg text-white bg-primary">
      {children}
    </div>
  );
};

export default Button;
