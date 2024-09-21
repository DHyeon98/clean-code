import { useEffect, useRef, useState } from "react";

/**
 * 리렌더링 방지가 필요하다면 useState 대신 useRef
 *
 * useRef는 useState와 다르게 가변 컨테이너이다.
 * 한 번 고정된 값을 컴포넌트 내부에서 관리하는 값은 useState가 필요 없다.
 *
 * 컴포넌트 전체적인 수명과 동일하게 지속된 정보를 일관적으로 제공해야하는 경우
 */
export function RefInsteadOfState() {
  // 리렌더링을 자주 발생시키는 코드
  //   const [isMount, setIsMount] = useState(false);

  //   useEffect(() => {
  //     if (!isMount) setIsMount(true);
  //   }, [isMount]);

  // 가변 컨테이너
  // 컴포넌트의 생명주기와 동일하게 움직인다.
  // 일관적인 값을 안전하게 제공할 수 있다.
  const isMount = useRef(false);
  // 렌더링을 굳이 유발하지 않기 때문에 불필요한 리렌더가 발생하지 않는다
  useEffect(() => {
    isMount.current = true;
    return () => (isMount.current = false);
  }, []);
  return <div></div>;
}
