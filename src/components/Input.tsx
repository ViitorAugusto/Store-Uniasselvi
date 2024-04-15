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
    showError?: boolean;
  };

export const Input = forwardRef<HTMLInputElement, InputProps<any>>(
  ({ ...props }, ref) => {
    const { field, fieldState } = useController(props);
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="flex flex-col relative h-24">
        <label
          htmlFor={props.name}
          className={`text-xs p-1   ${
            fieldState.error ? "text-red-500 " : "text-zinc-500 focus:text-zinc-400"
          }`}
        >
          {props.label}
        </label>
        <input
          {...field}
          ref={ref}
          type={props.isPassword && !showPassword ? "password" : "text"}
          placeholder={props.placeholder}
          className={`h-12 rounded px-3 border focus:outline-none focus:ring-1 shadow 
                     focus:ring-zinc-400 focus:border-transparent transition duration-500 ease-in-out
                      text-zinc-800 focus:placeholder:text-zinc-400
                     ${
                       fieldState.invalid
                         ? "border-red-500 placeholder:text-red-500"
                         : "border-zinc-400 "
                     }
                     
                     `}
        />
        {props.isPassword && (
          <div className="absolute right-4 top-10 cursor-pointer text-zinc-700 ">
            {showPassword ? (
              <IoEyeOffOutline
                onClick={toggleShowPassword}
                className="size-5"
              />
            ) : (
              <IoEyeOutline onClick={toggleShowPassword} className="size-5" />
            )}
          </div>
        )}

        {fieldState.error && props.showError && (
          <small className="block text-xs text-red-500 p-1 ">
            {fieldState.error.message}
          </small>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
