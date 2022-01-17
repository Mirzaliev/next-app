import React, {useContext} from 'react';
import style from './menu.module.css';
import {AppContext} from "../../context/app.context";
import {MenuItem} from "../../interfaces/Menu.interface";

export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  return (
    <div>
      {menu.map((m: MenuItem) => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
    </div>
  );
};
