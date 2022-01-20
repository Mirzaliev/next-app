import React from 'react';
import style from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import {Menu} from '../Menu';
import {SearchInput} from "../../components";

const Sidebar = ({ ...props }: SidebarProps ): JSX.Element => {
  return (
    <aside { ...props}>
      <SearchInput/>
      <Menu/>
    </aside>
  );
};

export default Sidebar;
