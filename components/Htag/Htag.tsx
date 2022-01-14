import React from "react";
import style from './Htag.module.css'
import {HtagProps} from "./Htag.props";

export const Htag = ({tag, children} : HtagProps): JSX.Element=> {
    return (<h1 className={style.h1 + ' ' + style.h2}>{children}</h1>)
}