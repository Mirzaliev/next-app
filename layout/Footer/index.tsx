import React from 'react';
import style from './Footer.module.css';
import {FooterProps} from "./Footer.props";
import classNames from "classnames";



const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={classNames(className, style.footer)} {...props}>
      <span>OwlTop © 2020 - 2021 Все права защищены</span>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;
