/**
 * 연관된 상태는 객체로 묶어내기
 */
export function ObjectState() {
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

  //   if (isLoading) return <div>loading</div>;
  //   if (isFinish) return <div>success</div>;
  //   if (isError) return <div>error</div>;

  // 하나의 상태가 하나의 useState로 뽑힐 필요는 없다.
  // 무의미한 state를 안 만드는게 좋다.
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isFinish: false,
    isError: false,
  });

  const fetchData = () => {
    // fetch Data 시도
    setFetchState({
      isLoading: true,
      isFinish: false,
      isError: false,
    });

    fetch(() => {
      // fetch Data 성공
      setFetchState({
        isLoading: false,
        isFinish: true,
        isError: false,
      });
    }).catch(() => {
      // fetch Data 실패
      setFetchState({
        isLoading: false,
        isFinish: false,
        isError: true,
      });
    });
  };

  if (fetchState.isLoading) return <div>loading</div>;
  if (fetchState.isFinish) return <div>success</div>;
  if (fetchState.isError) return <div>error</div>;
}
