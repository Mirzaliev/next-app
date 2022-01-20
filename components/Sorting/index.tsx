import style from "./Sorting.module.css";
import React from "react";
import {SortingProps, SortVariant} from "./Sorting.props";


export const Sorting = ({sort, setSort, className, ...props}: SortingProps) : JSX.Element => {
  return (<div className={style.filters}>
    <a href='#' onClick={() => setSort(SortVariant.Rating)} className={sort == SortVariant.Rating ? style.active : ''}>По рейтингу</a>
    <a href='#' onClick={() => setSort(SortVariant.Price)} className={sort == SortVariant.Price ? style.active : ''}>По цене</a>
  </div>);
};