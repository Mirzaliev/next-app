import React from 'react';
import style from './Header.module.css';
import {HeaderProps} from "./Header.props";


const Header = ({...props}: HeaderProps): JSX.Element => {
  return (
    <header {...props}>
      <span>Header</span>
    </header>
  );
};

export default Header;
