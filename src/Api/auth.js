import axiosClient from "./AxiosClient";

const authApi = {
  login: async (username, password) => {
    if (!username || !password)
      throw new Error("Username or password is not valid");
    return await axiosClient.post("/login", { username, password });
  },
};

export default authApi;
