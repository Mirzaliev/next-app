import {Button} from "../components";
import React, {useEffect, useState} from "react";
import {withLayout} from "../layout";
import axios from 'axios';
import {GetStaticProps } from "next";
import {MenuItem} from "../interfaces/Menu.interface";


function Home({menu}: HomeProps): JSX.Element {

  const [counter, setCounter] = useState<number>(4);

  return (
    <>
      <Button mode='primary' className='sdfsdfsdf' arrow='right'
        onClick={() => setCounter(counter + 1)}>{counter}</Button>
      <Button mode='ghost' arrow='down'>ghost</Button>
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