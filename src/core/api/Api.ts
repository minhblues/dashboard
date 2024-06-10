import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

// ** Config
import config from "@/core/config";

// ** Constants
import { REQUEST_TIMEOUT_MS } from "@/core/constants/ApiConstants";

// ** Utils
import {
  convertObjectToBody,
  convertObjectToQueryParams,
} from "@/core/utils/URLUtils";
import {
  apiFailureResponseInterceptor,
  apiRequestInterceptor,
  apiSuccessResponseInterceptor,

  // apiFailureResponseInterceptor,
  // blockedApiRoutesForAirgapInterceptor,
} from "./ApiUtils";

export const apiRequestConfig = {
  baseURL: config.gatewayUrl + "/admin",
  timeout: REQUEST_TIMEOUT_MS,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance: AxiosInstance = axios.create();

const requestInterceptors = [apiRequestInterceptor];
requestInterceptors.forEach((interceptor) => {
  axiosInstance.interceptors.request.use(interceptor as any);
});

axiosInstance.interceptors.response.use(
  apiSuccessResponseInterceptor,
  apiFailureResponseInterceptor,
);

class Api {
  static async get(
    url: string,
    queryParams?: any,
    config: AxiosRequestConfig = {},
  ) {
    return axiosInstance.get(url + convertObjectToQueryParams(queryParams), {
      ...apiRequestConfig,
      ...config,
    });
  }

  static async post(
    url: string,
    body?: any,
    queryParams?: any,
    config: AxiosRequestConfig = {},
  ) {
    return axiosInstance.post(
      url + convertObjectToQueryParams(queryParams),
      convertObjectToBody(body, config),
      {
        ...apiRequestConfig,
        ...config,
      },
    );
  }

  static async put(
    url: string,
    body?: any,
    queryParams?: any,
    config: AxiosRequestConfig = {},
  ) {
    return axiosInstance.put(
      url + convertObjectToQueryParams(queryParams),
      convertObjectToBody(body, config),
      {
        ...apiRequestConfig,
        ...config,
      },
    );
  }

  static async patch(
    url: string,
    body?: any,
    queryParams?: any,
    config: AxiosRequestConfig = {},
  ) {
    return axiosInstance.patch(
      url + convertObjectToQueryParams(queryParams),
      convertObjectToBody(body, config),
      {
        ...apiRequestConfig,
        ...config,
      },
    );
  }

  static async delete(
    url: string,
    queryParams?: any,
    config: AxiosRequestConfig = {},
  ) {
    return axiosInstance.delete(url + convertObjectToQueryParams(queryParams), {
      ...apiRequestConfig,
      ...config,
    });
  }
}

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export default Api;
