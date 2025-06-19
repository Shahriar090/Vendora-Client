import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { api } from "@/Api";
import axios from "axios";

const useAxios = () => {
  const { auth, setAuthData } = useAuth();

  useEffect(() => {
    // request interceptor
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        const accessToken = auth.accessToken;

        if (accessToken) {
          config.headers.Authorization = accessToken;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // response interceptor
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          console.log("Your token has expired");
          originalRequest._retry = true;

          try {
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_LOCAL_URL}/auth/refresh-token`,
              {},
              { withCredentials: true }
            );
            console.log("Trying for new access token");
            const { accessToken } = response.data.data;
            console.log("New access token given");
            setAuthData({ ...auth, accessToken: accessToken });
            originalRequest.headers.Authorization = accessToken;

            return axios(originalRequest);
          } catch (error) {
            console.error(error);
            throw error;
          }
        }
        return Promise.reject(error);
      }
    );
    // cleanup function
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, setAuthData]);
  return { api };
};

export default useAxios;
