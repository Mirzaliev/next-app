import React, {useState} from "react";
import {withLayout} from "../layout";
import axios from 'axios';
import {GetStaticProps } from "next";
import {MenuItem} from "../interfaces/Menu.interface";
import {Input, Textarea} from "../components";


function Home({menu}: HomeProps): JSX.Element {

  return (
    <>
      <Input placeholder='sadfsadsadsad' type='number'/>
      <Textarea defaultValue={'dsfsfsdfdsf'}></Textarea>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_API + '/top-page/find', {
    firstCategory
  });
  return {
    props: {menu, firstCategory}
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
