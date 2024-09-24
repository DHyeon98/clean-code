/**
 * 객체 Props 지양하기
 *
 * - 변하지 않는 값일 경우 컴포넌트 외부로 드러내기
 * - 필요한 값만 객체를 분해해서 Props로 내려준다.
 * - 정말 무거운 연산, 너무 잦은 연산이 있을 경우 useMemo() 활용하여 계산된 값을 메모이제이션 한다.
 * - 컴포넌트를 더 평탄하게 나누면 나눌 Props 또한 평탄하게 나눠서 내릴 수 있다.
 */
function SomeComponent() {
  return (
    <ChildComponent propObj={{ hello: "world" }} propArr={["hello", "hello"]} />
  );
}

function SomeComponent({ heavyState }) {
  const [propArr, setPropArr] = useState(["hello", "hello"]);

  const computedState = useMemo(
    () => ({
      heavyState: heavyState,
    }),
    [heavyState]
  );

  return (
    <>
      <ChildComponent
        hello="world"
        hello2={propArr.at(0)}
        computedState={{
          heavyState: heavyState,
        }}
        computedState2={{
          heavyState: heavyState,
        }}
      />
      <ChildComponent2 hello={propArr.at(1)} />
    </>
  );
}
