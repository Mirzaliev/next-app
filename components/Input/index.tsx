import {InputProps} from "./Input.props";
import classNames from "classnames";
import style from './Input.module.css';
import React, {ForwardedRef, forwardRef} from "react";

export const Input = forwardRef(({error,className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>):JSX.Element => {
  return (
    <div>
      <input ref={ref} className={classNames(className, style.input)} {...props}/>
      <small>{error?.message}</small>
    </div>
  );
});
