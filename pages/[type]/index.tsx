import React, {useContext, useEffect, useState} from "react";
import {withLayout} from "../../layout";
import axios from 'axios';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {MenuItem} from "../../interfaces/Menu.interface";
import {firstLevelMenu} from "../../helper/menu";
import {ParsedUrlQuery} from "querystring";
import {AppContext} from "../../context/app.context";


function Category({menu,firstCategory}: CategoryProps): JSX.Element {

  const {setMenu} = useContext(AppContext);

  useEffect(() => {
    if (setMenu) {
      setMenu(menu);
    }
  }, [menu]);

  return (
    <>
      <p>{}</p>
    </>
  );
}

export default withLayout(Category);


export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: firstLevelMenu.map(m=> `/${m.route}`),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<CategoryProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params) {
    return {
      notFound: true
    };
  }
  try {
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if(!firstCategoryItem) {
      return {
        notFound: true
      };
    }

    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_API + '/top-page/find', {
      firstCategory: firstCategoryItem.id
    });

    return {
      props: {menu, firstCategory: firstCategoryItem.id},
    };
  }catch {
    return {
      notFound: true
    };
  }


};

interface CategoryProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
