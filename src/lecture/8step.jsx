import { useFetchData } from "../hooks/useFetchData";

/**
 * Custom Hooks를 사용하면 코드를 확장성 있고 재사용 가능하게 작성할 수 있다.
 */
export function CustomHooks() {
  const { isLoading, isError, isFinish } = useFetchData("url");

  if (isLoading) return <div>loading</div>;
  if (isFinish) return <div>success</div>;
  if (isError) return <div>error</div>;
}
