import axios, { AxiosInstance } from 'axios';
import { useJwt } from 'react-jwt';
// import { useCustomDispatch } from '../redux';

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const useAxios = (): AxiosInstance => {
  const accessToken = 'TOKEN';
  const refreshToken = 'TOKEN';
  // const dispatch = useCustomDispatch();
  const { isExpired } = useJwt(accessToken);

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {}
  });

  axiosInstance.interceptors.request.use(async (req) => {
    // if (accessToken && dispatch) {
    if (req.headers != null) {
      req.headers.accessToken = accessToken;
      if (!isExpired) return req;
      // const tokenDecoded: any = jwt_decode(accessToken);
      // const isExpired = dayjs.unix(tokenDecoded.exp).diff(dayjs()) < 1;

      const res = await axios.post(
        `${BASE_URL}/refresh`,
        {},
        {
          withCredentials: true,
          headers: {
            refreshToken
          }
        }
      );

      // dispatch(
      //   setTokens({
      //     access_token: res.data.data.access_token,
      //     refresh_token: res.data.data.refresh_token
      //   })
      // );

      req.headers.access_token = res.data.data.access_token;
    }
    return req;
  });

  // });
  return axiosInstance;
};
