import {Button, Rating, Label, LabelGroup} from "../components";

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
      <Rating rating={5}/>
      <LabelGroup>
        <Label link={'/link'}>Дизайн</Label>
        <Label link={'/link'} >онлайн</Label>
        <Label link={'/link'}>Помощь в составлении резюме</Label>
        <Label link={'/link'} mode={"green"}>-28 060 ₽</Label>
        <Label link={'/link'} mode={"red"}>hh.ru</Label>
      </LabelGroup>

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