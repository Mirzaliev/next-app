import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SortingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  sort: SortVariant,
  setSort: (sort: SortVariant) => void
}

export enum SortVariant {
  Rating,
  Price
}