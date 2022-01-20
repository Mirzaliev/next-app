import {LabelProps} from "./Label.props";
import React from "react";
import classNames from "classnames";
import style from './Label.module.css';

export const Label = ({children, link, mode, className, ...props}: LabelProps): JSX.Element => {

  !link && (link = '#');
  !mode && (mode = 'outline');

  return (<a href={link} className={classNames(className,style.label, style[mode])} {...props}>{children}</a>);
};