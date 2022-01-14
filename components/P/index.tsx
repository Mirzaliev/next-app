import {PProps} from "./P.props";
import React from "react";
import cn from 'classnames';
import style from './P.module.css';

export const P = ({size = 'md', children, className, ...props}: PProps): JSX.Element => {
    return (<p className={cn(style.default, className, {
        [style.md]: size === 'md',
        [style.sm]: size === 'sm',
        [style.lg]: size === 'lg',
    })}
               {...props}
    >
        {children}</p>);
}