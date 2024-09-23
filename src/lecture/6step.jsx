import { useState } from "react";

/**
 * 연관된 상태 단순화하기
 *
 * 문제 : 코드의 상태가 모두 연관이 되어있다.
 */

// 연관된 것들끼리 묶어서 처리하면 에러를 방지하고 코드가 간결해진다.
const PROMISE_STATE = {
  INIT: "init",
  LOADING: "loading",
  FINISH: "finish",
  ERROR: "error",
};
export function FlatState() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [isFinish, setIsFinish] = useState(false);
  //   const [isError, setIsError] = useState(false);

  //   const fetchData = () => {
  //     // fetch Data 시도
  //     setIsLoading(true);

  //     fetch(() => {
  //       // fetch Data 성공
  //       setIsLoading(false);
  //       setIsFinish(true);
  //     }).catch(() => {
  //       // fetch Data 실패
  //       setIsError(true);
  //     });
  //   };

  // if(isLoading) return <div>loading</div>;
  // if(isFinish) return <div>success</div>;
  // if(isError) return <div>error</div>;

  const [promiseState, setPromiseState] = useState(PROMISE_STATE.INIT);

  const fetchData = () => {
    // fetch Data 시도
    setPromiseState(PROMISE_STATE.LOADING);

    fetch(() => {
      // fetch Data 성공
      setPromiseState(PROMISE_STATE.FINISH);
    }).catch(() => {
      // fetch Data 실패
      setPromiseState(PROMISE_STATE.ERROR);
    });
  };

  if (promiseState === PROMISE_STATE.LOADING) return <div>loading</div>;
  if (promiseState === PROMISE_STATE.FINISH) return <div>success</div>;
  if (promiseState === PROMISE_STATE.ERROR) return <div>error</div>;
}
