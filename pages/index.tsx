import {Button, P} from "../components";
import React, {useEffect, useState} from "react";

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
	console.log('Обновление');
	return function cleanup() { console.log('Unmout'); };
  }, [counter]);

  return (
    <div>
        <Button mode='primary' className='sdfsdfsdf' arrow='right' onClick={() => setCounter(counter + 1)}>{counter}</Button>
        <Button mode='ghost' arrow='down'>ghost</Button>
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos ea error eveniet excepturi exercitationem facilis nulla omnis repellat voluptate? Autem dignissimos dolorem doloribus libero natus possimus quo tempore voluptates.</P>
    </div>
  );
}


