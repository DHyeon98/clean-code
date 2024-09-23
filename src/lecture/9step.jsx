import { useState } from "react";

/**
 * updater function을 사용해 prev state를 고려하면 예상치 못한 결과를 예방할 수 있다.
 */
export function PrevState() {
  const [age, setAge] = useState(0);

  function updateState() {
    setAge(age + 1);
    setAge(age + 1);
    setAge(age + 1);
  }

  function updaterFunction() {
    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
  }
}
