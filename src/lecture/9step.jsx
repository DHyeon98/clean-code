import { useState } from "react";

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
