import React, {useState} from "react";
import {withLayout} from "../layout";
import axios from 'axios';
import {GetStaticProps } from "next";
import {MenuItem} from "../interfaces/Menu.interface";
import {Input, Textarea} from "../components";
import {API} from "../helper/api";


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
  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
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
