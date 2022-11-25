import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function LoginResult() {
  const { search } = useLocation();
  const { name } = queryString.parse(String(search));
  return (
    <>
      <p>
        Welcome you, <b>{name}</b>
      </p>
    </>
  );
}
