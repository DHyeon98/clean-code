function InlineStyle() {
  return (
    <button style="background-color: 'red'; font-size: '14px';">
      Clean Code
    </button>
  );
}

/**
 * key는 카멜 케이스를 쓴다.
 * 스타일 객체는 컴포넌트 안에 있으면 불필요한 렌더링이 되기 때문에 밖으로 빼준다.
 */
const MyButtonStyle = {
  warning: { backgroundColor: "yellow", fontSize: "14px" },
  danger: { backgroundColor: "red", fontSize: "24px" },
};

function InlineStyle() {
  return (
    <>
      <button style={MyButtonStyle.warning}>Warning Code Click!</button>
      <button style={MyButtonStyle.danger}>Danger Code Click!</button>
    </>
  );
}
