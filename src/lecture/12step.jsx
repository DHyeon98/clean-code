/**
 * shorthand props 사용
 */
function ShorthandProps(props) {
  return (
    <header
      className="clean-header"
      title="Clean Code React"
      isDarkMode={true}
      isLogin={true}
      hasPadding={true}
      isFixed={true}
      isAdmin={true}
    >
      <ChildComponent {...props} />
    </header>
  );
}

function ShorthandProps({ isDarkMode, isLogin, ...props }) {
  return (
    <header
      className="clean-header"
      title="Clean Code React"
      // 보장되지 않는 값들
      isDarkMode={isDarkMode}
      isLogin={isLogin}
      //------------------
      hasPadding
      isFixed
      isAdmin
    >
      <ChildComponent {...props} />
    </header>
  );
}
