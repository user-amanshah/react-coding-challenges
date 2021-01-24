import React, { memo, useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  // solution - use memoizing with the help of higher order component which skips rendering
  // here settimeout caused launchpad to keep rendering which is prevented now.
  
  memo(() => {
    setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);
  }, [rerenderCount])
  
  return (

    // use class component or functional component <FunctionalRocket/>

    <div className="launchpad">
      <ClassRocket />
    </div>
  );
}
