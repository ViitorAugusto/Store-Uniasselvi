import { forwardRef, useState } from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

type InputProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & {
    label: string;
    placeholder: string;
    type: string;
    isPassword?: boolean;
  };

export const InputRegister = forwardRef<HTMLInputElement, InputProps<any>>(
  ({ ...props }, ref) => {
    const { field, fieldState } = useController(props);
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="flex flex-col relative h-20">
        <label
          htmlFor={props.name}
          className={`text-xs p-1 font-mono  ${
            fieldState.error ? "text-red-500" : "text-zinc-500"
          }`}
        >
          {props.label}
        </label>
        <input
          {...field}
          ref={ref}
          type={props.isPassword && !showPassword ? "password" : "text"}
          placeholder={props.placeholder}
          className={`h-10 rounded px-3 border border-zinc-400 focus:outline-none focus:ring-1
                     focus:ring-zinc-400 focus:border-transparent transition duration-500 ease-in-out
                     bg-zinc-100 text-zinc-800
                     ${fieldState.error ? "border-red-500" : "border-zinc-400"}
                     `}
        />
        {props.isPassword && (
          <div className="absolute right-4 top-9 cursor-pointer text-zinc-500 ">
            {showPassword ? (
              <IoEyeOffOutline onClick={toggleShowPassword} />
            ) : (
              <IoEyeOutline onClick={toggleShowPassword} />
            )}
          </div>
        )}

        {fieldState.error && (
          <small className="block text-xs text-red-500 font-roboto p-0  ml-2">
            {fieldState.error.message}
          </small>
        )}
      </div>
    );
  }
);

InputRegister.displayName = "InputRegister";
