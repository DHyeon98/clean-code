function PropsNaming() {
  return (
    <>
      {/* ❌ */}
      <ChildComponent
        // className 임
        class="mt-0"
        // 카멜 케이스는 컴포넌트라고 생각할 수 있다.
        Clean="code"
        // _ 언더바는 가급적 쓰지 않는다. 회사에서 정한 규칙이 아닌 이상
        clean_code="react"
        // 컴포넌트일 경우 카멜로 써준다
        otherComponent={OtherComponent}
        // 축약해서 사용하는게 좋다
        isShow={true}
      />
    </>
  );
}

function ChildComponent({ Clean, clean_code, otherComponent }) {}

/**
 * 알아두면 좋은 Props 네이밍
 */
function PropsNaming() {
  return (
    <>
      <ChildComponent
        className="mt-0"
        clean="code"
        cleanCode="react"
        OtherComponent={OtherComponent}
        isShow
      />
    </>
  );
}

// function ChildComponent({ Clean, clean_code, otherComponent }) {}
