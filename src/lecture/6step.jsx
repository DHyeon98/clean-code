import { useState } from "react";

/**
 * 연관된 상태 단순화하기
 *
 * 문제 : 코드의 상태가 모두 연관이 되어있다.
 */
export function FlatState() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    // fetch Data 시도
    setIsLoading(true);

    fetch(() => {
      // fetch Data 성공
      setIsLoading(false);
      setIsFinish(true);
    }).catch(() => {
      // fetch Data 실패
      setIsError(true);
    });
  };
}
