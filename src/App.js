import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  console.log('顯示狀態用的：', count);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          // console.log('綁在監聽器中的', count);
        }}
      >
        按一次次數加上1
      </button>
    </>
  );
}

export default App;
