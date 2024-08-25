import { useState, useEffect } from "react";

/**
 * 플래그 값이란
 * - 프로그래밍에서 주로 특정 조건 혹은 제어를 위한 조건을 불리언으로 나타낸 값
 */

// 안 좋은 코드
function FlagState() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (hasToken) setIsLogin(true);
    if (hasCookie) setIsLogin(true);
    if (!isNewUser) setIsLogin(true);
  }, [hasToken, hasCookie, isNewUser]);

  return <div>{isLogin && "안녕하세요"}</div>;
}

// 개선 코드
function FlagState() {
  // 매렌더링마다 변경된 조건이 isLogin에 들어가기 때문에
  // 굳이 상태를 만들지 않아도 되고, 상태를 위한 분기문을 만들 필요가 없다.
  // 추가 요구사항이 생겨도 플래그 변수에 조건만 추가해도 큰 수정 없이 관리할 수 있다.
  const isLogin = hasToken && hasCookie && !isNewUser;

  return <div>{isLogin && "안녕하세요"}</div>;
}
