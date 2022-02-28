import { useState } from 'react';

import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  const [state, setState] = useState('jj');
  return (
    <>
      <h1>我是Parent的h1元素</h1>
      <ChildB setState={setState} />
      <ChildA state={state} />
    </>
  );
}
export default Parent;
