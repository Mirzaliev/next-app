import {InputProps} from "./Input.props";
import classNames from "classnames";
import style from './Input.module.css';
import React from "react";

export const Input = ({className, ...props}: InputProps):JSX.Element => {
  return (<input className={classNames(className, style.input)} {...props}/>);
};
