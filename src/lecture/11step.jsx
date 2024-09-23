/**
 * 문자열이라면 curly braces를 생략해도 된다.
 * 표현식(값을 계산하는 겅우)은 curly braces를 사용해야한다.
 */
function CurlyBraces() {
  return (
    <header
      className=""
      style={{
        backgroundColor: "red",
        width: 1000,
      }}
      value={1}
      value={[]}
      value={{}}
      value={() => {}}
      value={1 + 2}
    >
      <img src="" alt="" />
    </header>
  );
}
