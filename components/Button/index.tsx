import React from "react";
import {ButtonProps} from "./Button.props";
import style from './Button.module.css';
import cn from 'classnames';
import  ArrowIcon from './arrow.svg';

export const Button = ({ mode, children, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
  return (
    <button className={cn(style.default, className, {
      [style.primary] : mode === 'primary',
      [style.ghost] : mode === 'ghost'
    })} {...props}
    >
      {children}
      {arrow !== 'none' && <span className={cn(style.arrow, {
        [style.down]: arrow === 'down'
      })}>
        <ArrowIcon/>
      </span>}
    </button>
  );
};