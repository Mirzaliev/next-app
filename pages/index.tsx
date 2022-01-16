import {Button} from "../components";
import React, {useEffect, useState} from "react";
import { withLayout } from "../layout";


function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(4);

  return (
    <>
      <Button mode='primary' className='sdfsdfsdf' arrow='right' onClick={() => setCounter(counter + 1)}>{counter}</Button>
      <Button mode='ghost' arrow='down'>ghost</Button>
    </>
  );
}

export default withLayout(Home);
