import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="border-white border-spacing-4 shadow-md focus:border-[#149eca] focus:outline-none focus:ring-1 focus:ring-[#149eca] rounded-lg px-3 py-3 text-md w-full bg-transparent"
      {...rest}
    />
  );
};

export default Input;