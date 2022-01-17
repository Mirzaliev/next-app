import React from 'react';
import style from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import {Menu} from '../Menu';

const Sidebar = ({ ...props }: SidebarProps ): JSX.Element => {
  return (
    <aside { ...props}>
      <Menu/>
    </aside>
  );
};

export default Sidebar;
