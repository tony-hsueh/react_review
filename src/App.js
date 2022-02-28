import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');

  const [radioValue, setRadioValue] = useState('');
  const foodOptions = ['排骨飯', '拉麵', '雞腿飯'];
  // 可在此陣列中插入新的食物種類
  const [selectValue, setSelectValue] = useState('');
  return (
    <>
      <h1>可於react控制的表單元素</h1>
      <h2>1.文字輸入框</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <h2>2.文字輸入區域</h2>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
      />
      <h2>3.選項按鈕</h2>
      {foodOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              id={'foodOption' + i}
              checked={v === radioValue}
              onChange={(e) => {
                setRadioValue(e.target.value);
              }}
            />
            <label htmlFor={'foodOption' + i}>{v}</label>
          </div>
        );
      })}
      <h2>4.下拉選單</h2>
      <label htmlFor="cars">選擇車子的牌子：</label>
      <select
        name="cars"
        id="cars"
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
      >
        <option value="">請選擇</option>
        <option value="volvo">volvo</option>
        <option value="toyota">toyota</option>
        <option value="audi">audi</option>
        <option value="honda">honda</option>
      </select>
    </>
  );
}

export default App;
