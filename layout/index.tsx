import React, {useContext, useReducer} from 'react';
import style from './Layout.module.css';
import {LayoutProps} from "./Layout.props";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import {AppContext, AppContextProvider, IAppContext} from "../context/app.context";


const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <Header className={style.header}/>
      <Sidebar className={style.sidebar}/>
      <main className={style.main}>

        {children}

      </main>
      <Footer className={style.footer}/>
    </div>
  );
};



export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: React.FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider firstCategory={props.firstCategory} menu={props.menu}>
        <Layout>
          <Component {...props}/>
        </Layout>
      </AppContextProvider>
    
    );
  };
};
