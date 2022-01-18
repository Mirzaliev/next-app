
import React from "react";
import {withLayout} from "../../layout";
import axios from 'axios';
import {GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext} from "next";
import {MenuItem} from "../../interfaces/Menu.interface";
import {AliasPageModel} from "../../interfaces/aliaspage.interface";
import {ParsedUrlQuery} from "querystring";
import { ProductModel} from "../../interfaces/product.interface";

function Course({page, products}: CourseProps): JSX.Element {

  return (
    <>
      {products && products.map((p: ProductModel) => (<li key={p._id}>{p.title}</li>))}
    </>
  );
}

export default withLayout(Course);

const firstCategory = 0;

export const getStaticPaths: GetStaticPaths = async () => {
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_API + '/top-page/find', {
    firstCategory
  });

  return {
    paths: menu.flatMap(m => m.pages.map(p => '/courses/'+ p.alias)),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params) {
    return {
      notFound: true
    };
  }

  const {data: page} = await axios.get<AliasPageModel>(process.env.NEXT_PUBLIC_API + '/top-page/byAlias/' + params.alias);
  const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_API + '/product/find', {
    "category": page.category,
    "limit": 10
  });

  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_API + '/top-page/find', {
    firstCategory
  });


  return {
    props: {menu, firstCategory, page, products}
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: AliasPageModel;
  products: ProductModel[];
}