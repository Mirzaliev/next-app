import React, {useState} from "react";
import {withLayout} from "../layout";
import axios from 'axios';
import {GetStaticProps } from "next";
import {MenuItem} from "../interfaces/Menu.interface";


function Search({menu}: SearchProps): JSX.Element {


  return (
    <>
      <p>Страница посикка</p>
    </>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_API + '/top-page/find', {
    firstCategory
  });
  return {
    props: {menu, firstCategory}
  };
};

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
