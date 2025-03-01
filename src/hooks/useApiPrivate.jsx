import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { apiPrivate } from "../api";
import useAuth from "./useAuth";

export default function useApiPrivate() {
  const { auth } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercept = apiPrivate.interceptors.request.use(
      (config) => {
        console.log("12", config.headers["Authorization"]);
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${
            auth && auth.accessToken
          }`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = apiPrivate.interceptors.response.use(
      (res) => res,
      async (err) => {
        const prevRequest = err && err.config;
        console.log("15", prevRequest);
        if (err && err.response.status === 401 && !prevRequest.sent) {
          prevRequest.sent = true;
          // new access token
          const accessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return apiPrivate(prevRequest);
        }
        return Promise.reject(err);
      }
    );

    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
      apiPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return apiPrivate;
}
