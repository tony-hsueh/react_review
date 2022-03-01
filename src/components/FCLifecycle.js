import { useEffect, useRef, useState } from 'react';

function FCLifecycle() {
  const [total, setTotal] = useState(0);
  const [didMount, setDidMount] = useState(false);
  const didMountRef = useRef(false);
  //   didMount
  useEffect(() => {
    console.log('didMount');
  }, []);
  // didUpdate + didMount
  useEffect(() => {
    console.log('didMount+didUpdate');
  }, [total]);
  // didUpdate 此做法若遇到狀態再次回到０的時候就會出錯
  useEffect(() => {
    if (total !== 0) console.log('didUpdate,模擬真正更動才顯示,bug');
  }, [total]);
  //   willUnmount
  useEffect(() => {
    return () => {
      console.log('willUnmount');
    };
  }, []);
  useEffect(() => {
    setDidMount(true);
  }, []);
  useEffect(() => {
    if (didMount) console.log('didUpdate,模擬真正更動才顯示,麻煩寫法');
  }, [total]);
  //使用Ref的寫法
  useEffect(() => {
    if (didMountRef.current) {
      console.log('最終版didUpdate');
    } else {
      didMountRef.current = true;
    }
  }, [total]);
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1);
          console.log(total + 1);
        }}
      >
        {total}
      </h1>
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        加1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1);
        }}
      >
        減1
      </button>
    </>
  );
}
export default FCLifecycle;
