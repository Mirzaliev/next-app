import {LabelGroupsProps} from "./Label.props";
import style from './Label.module.css';
import React from "react";

export const LabelGroup = ({children, mode}: LabelGroupsProps) : JSX.Element=> {
  !mode && (mode = 'row');

  return (<div className={style[mode]}>{children}</div>);
};