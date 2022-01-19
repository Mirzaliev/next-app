import React, {useContext} from 'react';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/Menu.interface";
import classNames from "classnames";
import style from './menu.module.css';
import Link from 'next/link';
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helper/menu";



export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);

  const router =  useRouter();

  const openSecondLevelMenu = (secondMenuName: string) => {
    setMenu && setMenu(menu.map(m => {
      if(m._id.secondCategory == secondMenuName) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };
  const buildFirstLevelMenu = () => {
    return (
      <ul className={style.category}>
        {firstLevelMenu.map(fLM => (
          <li key={fLM.route} className={classNames( {
            [style.active] : fLM.id == firstCategory
          })}>
            <Link href={`/${fLM.route}`}>
              <a >
                <span>{fLM.icon}</span>
                <span>{fLM.name}</span>
              </a>
            </Link>

            {fLM.id == firstCategory && buildSecondLevelMenu(fLM)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevelMenu = (menuChildren: FirstLevelMenuItem) => {
    return (
      <ul className={style.secondCategory}>
        {menu.map(m => {
          if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <span onClick={() =>  openSecondLevelMenu(m._id.secondCategory)}>
                {m._id.secondCategory}
              </span>
              <ul className={m.isOpened ? style.isOpen : ''} >
                {buildThirdLevelMenu(m.pages, menuChildren.route)}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };


  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return (
      <>
        {pages.map(p => (
          <li key={p.alias} className={classNames({
            [style.active]: p.alias == router.asPath.split('/')[2]
          })}>
            <Link href={`/${route}/${p.alias}`} >
              <a >
                {p.category}
              </a>
            </Link>

          </li>
        ))}
      </>
    );
  };


  return (
    <nav className={style.nav}>
      {buildFirstLevelMenu()}
    </nav>
  );
};
