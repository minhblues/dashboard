// ** Utils
import { getCookie, removeCookie } from "@/core/utils";

// ** Axios
import { AxiosRequestConfig, AxiosResponse } from "axios";

export enum API_STATUS_CODES {
  REQUEST_NOT_AUTHORISED = 401,
  RESOURCE_NOT_FOUND = 404,
  SERVER_ERROR = 502,
  SERVER_UNAVAILABLE = 503,
  REQUEST_FORBIDDEN = 403,
}

export enum ERROR_CODES {
  PAGE_NOT_FOUND = "PAGE_NOT_FOUND",
  SERVER_ERROR = "SERVER_ERROR",
  REQUEST_NOT_AUTHORISED = "REQUEST_NOT_AUTHORIZED",
  REQUEST_TIMEOUT = "REQUEST_TIMEOUT",
  REQUEST_FORBIDDEN = "REQUEST_FORBIDDEN",
}
export const apiSuccessResponseInterceptor = (
  response: AxiosResponse,
): AxiosResponse["data"] => {
  if (response?.data?.code !== 200) {
    throw new Error(response.data.message);
  }

  return response;
};

export const apiRequestInterceptor = (config: AxiosRequestConfig) => {
  config.headers = config.headers ?? {};

  const accessToken = getCookie("db_session");
  if (accessToken) {
    config.headers["Authorization"] = accessToken;
  }

  return { ...config, timer: performance.now() };
};

export const apiFailureResponseInterceptor = async (error: any) => {
  // this can be extended to other errors we want to catch.
  // in this case it is 413.
  if (
    error &&
    error?.response &&
    error?.response.status === API_STATUS_CODES.REQUEST_NOT_AUTHORISED
  ) {
    // const currentUrl = `${typeof window !== "undefined" ? window.location.href : ""}`;

    removeCookie("db_session");
    removeCookie("adminId");
    // localStorage.removeItem("userData");

    // window.location.href = `/login?returnUrl=${currentUrl}`;

    return Promise.reject({
      ...error,
      code: ERROR_CODES.REQUEST_NOT_AUTHORISED,
      message: "Unauthorized. Redirecting to login page...",
      show: false,
    });
  }

  return Promise.resolve(error);
};
