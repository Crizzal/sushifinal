import { useEffect, useState } from "react";
function useToken() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken();
  };

  return {
    setToken: saveToken,
    deleteToken,
    token,
  };
}
export default useToken;
