import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";


export interface LabelProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
  children: ReactNode;
  link?: string;
  mode?: 'outline' | 'green' | 'red' | 'grey';
}

export interface LabelGroupsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode;
  mode?: 'column' | 'row';
}