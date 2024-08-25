import { useState } from "react";

const INFO = {
  name: "My Component",
  value: "Clean Code",
};

function NotUpdateValue() {
  // 업데이트가 되지 않는 일반적인 개체
  // 불필요한 참조가 문제가 된다.
  // 리액트 상태로 바꾸던가 컴포넌트 외부로 내보낸다.
  //   const INFO = {
  //     name: "My Component",
  //     value: "Clean Code",
  //   };

  const [count, setCount] = useState(0);

  const onIncrement = () => setCount((prevCount) => prevCount);
  const onDecrement = () => setCount((prevCount) => prevCount);
  return <header>{INFO}</header>;
}
