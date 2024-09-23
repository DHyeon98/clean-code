import { useMemo } from "react";

export function CopyProps({ value }) {
  // 렌더링 될 때마다 부담을 줌
  // const copyValue = 무거운연산(value);

  // props는 바로 사용하자
  // props를 복사하는 것은 지양한다. 연산된 값을 props로 넘기자
  // 무겁지 않은 경우는 컴포넌트 내부의 변수로도 간단히 사용 가능하다.
  const copyValue = useMemo(() => 무거운연산(value), [value]);

  return <div>{value}</div>;
}
