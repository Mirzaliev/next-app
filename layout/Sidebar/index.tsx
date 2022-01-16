import React from 'react';
import style from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";


const Sidebar = ({ ...props }: SidebarProps ): JSX.Element => {
  return (
    <aside { ...props}>
      <span>Sidebar</span>
    </aside>
  );
};

export default Sidebar;
