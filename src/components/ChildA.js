function ChildA(props) {
  console.log(props);
  // 我們藉由屬性props來傳遞父層的資料到子層
  return (
    <>
      <h2>我是child_a負責顯示parent的當前狀態：</h2>
      <p>{props.state}</p>
    </>
  );
}
export default ChildA;
