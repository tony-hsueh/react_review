import { useState } from 'react';
import CCLifecycle from './components/CCLifecycle';

function App() {
  const [alive, setAlive] = useState(true);
  return (
    <>
      {alive && <CCLifecycle />}
      <button
        onClick={() => {
          setAlive(!alive);
        }}
      >
        {alive ? '消失' : '出現'}
      </button>
    </>
  );
}

export default App;
