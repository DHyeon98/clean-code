import { useEffect, useState } from "react";

function UnnecessartState() {
  const [userList, setUserList] = useState(MOCK_DATA);
  // const [compUserList, setCompUserList] = useState(MOCK_DATA);

  // 컴포넌트 내부에서의 변수는
  // 렌더링 마다 고유의 값을 가지는 계산된 값을 가진다.
  const newList = userList.filter((user) => user.completed === true);

  // useEffect(() => {
  //     const newList = compUserList.filter((user) => user.completed === true);

  //     setCompUserList(newList);
  // }, [userList])

  return (
    <div>
      컴포넌트 내부 변수는 렌더링마다 고유한 값을 가진다. 따라서 고유의 값을
      갖는 값은 state를 만들지 않고 const 상태로 선언하는 게 좋은 경우도 있다
    </div>
  );
}
