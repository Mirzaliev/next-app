import {TextareaProps} from "./Textarea.props";
import classNames from "classnames";
import style from './Textarea.module.css';
import React from "react";

export const Textarea = ({className, ...props}: TextareaProps):JSX.Element => {
  return (<textarea className={classNames(className, style.input)} {...props}/>);
};
