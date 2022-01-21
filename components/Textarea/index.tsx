import {TextareaProps} from "./Textarea.props";
import classNames from "classnames";
import style from './Textarea.module.css';
import React, {ForwardedRef, forwardRef} from "react";

export const Textarea = forwardRef(({error, className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
  return (<div className={className}>
    <textarea ref={ref} className={classNames(style.input)} {...props}/>
    <small>{error?.message}</small>
  </div>);
});
