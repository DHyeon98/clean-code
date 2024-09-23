function HelloWorld() {
  const obj = {
    hello: "world",
  };

  return (
    <>
      {/* ✅ */}
      <a href="https://www.udemy.com/course/clean-code-js">Clean Code JS</a>

      {/* ❌ */}
      {/* 일관성이 없다. */}
      <input class="ccrc" type="button" value="Clean Code React" />

      {/* ❌ */}
      <Clean style={{ backgroundPosition: "left" }} />
    </>
  );
}
