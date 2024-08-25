import { useState, useEffect } from "react";

/**
 * 올바른 초기값 설정
 *
 * 초기값이란
 * - 가장 먼저 렌더링될때 순간적으로 보여질 수 있는 값.
 * - 초기에 렌더링 되는 값
 *
 * 초기값을 지키지 않을 경우
 * - 렌더링 이슈, 무한 루프, 타입 불일치 => 런타임 에러
 * - 초기값이 없다면 undefined 상태가 된다.
 */

function InitState() {
  const [count, setCount] = useState("0");
  const [list, setList] = useState();

  const resetState = () => {
    // 초기값은 문자열인데 숫자값이 들어가면 타입에러가 생긴다.
    // 초기값 설정을 초기에 잘 설정해놔야 실수가 나오지 않는다.

    // 근데 이것들 모두 타입스크립트가 해결해준다..
    setCount(INIT_COUNT_STATE);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetch("example.com");
      const result = await response.json();
      setList(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {
        // 초기값이 undefined 이기 때문에 오류가 난다.
        // 초기값을 배열로 설정해줘야 오류가 나지 않는다.
        list.map((item) => {
          <Item item={item} />;
        })
      }
    </>
  );
}
