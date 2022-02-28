import { useState } from 'react';

function ChildB(props) {
  const [bState, bsetState] = useState('b_data transfered');
  return (
    <>
      <h2>child_b</h2>
      <button
        onClick={() => {
          props.setState(bState);
        }}
      >
        送資料到Parent
      </button>
      <button
        onClick={() => {
          bsetState('fuck your data for teacher');
        }}
      >
        更改送的資料
      </button>
    </>
  );
}
export default ChildB;
