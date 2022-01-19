import React from "react";
import {withLayout} from "../../layout";
import axios from 'axios';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {MenuItem} from "../../interfaces/Menu.interface";
import {AliasPageModel, TopLevelCategory} from "../../interfaces/aliaspage.interface";
import {ParsedUrlQuery} from "querystring";
import {ProductModel} from "../../interfaces/product.interface";
import {firstLevelMenu} from "../../helper/menu";
import {TopPage} from '../../page-components';

function Course({page, products,firstCategory}: CourseProps): JSX.Element {

  return (
    <>
      <TopPage firstCategory={firstCategory} page={page} products={products}/>
    </>
  );
}

export default withLayout(Course);



export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for(const m of firstLevelMenu) {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_API + '/top-page/find', {
      firstCategory: m.id
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}` )));
  }
  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
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

    if(menu.length == 0) {
      return {
        notFound: true
      };
    }

    const {data: page} = await axios.get<AliasPageModel>(process.env.NEXT_PUBLIC_API + '/top-page/byAlias/' + params.alias);

    const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_API + '/product/find', {
      "category": page.category,
      "limit": 10
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    };

  }catch {
    return {
      notFound: true
    };
  }

};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: AliasPageModel;
  products: ProductModel[];
}
