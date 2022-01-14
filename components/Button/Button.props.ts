import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    mode: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
    children: ReactNode;
}