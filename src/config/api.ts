import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { PrivateVariables } from "./PrivateVariable";
import { clearAuthData, getToken } from "../utils/helpers";
import { toast } from "react-toastify";
import { ROUTES } from "../utils/constant";

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  skipAuth401Redirect?: boolean;
}

const axiosInstance = axios.create({
  baseURL: PrivateVariables.Api_Url,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 120000, // 2 minutes
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const customConfig = error.config as CustomAxiosRequestConfig;

    if (error.response) {
      const status = error.response.status;
      let message = "Something went wrong";
      if (
        error.response?.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
      ) {
        message = error.response.data.message as string;
      }

      // Handle 401 Unauthorized
      if (status === 401 && !customConfig?.skipAuth401Redirect) {
        clearAuthData();
        toast.error("Session expired. Please login again");
        let isAdminRoutes = customConfig.url?.includes("/");
        setTimeout(() => {
          window.location.href = isAdminRoutes ? ROUTES.LOGIN : ROUTES.LOGIN;
        }, 1000);
        return Promise.reject(error);
      }

      // Handle 403 Forbidden
      if (status === 403) {
        toast.error("You do not have permission to perform this action");
        return Promise.reject(error);
      }

      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
