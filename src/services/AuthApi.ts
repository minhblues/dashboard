import { AxiosPromise } from "axios";
import Api from "@/core/api/Api";
import { ApiResponse } from "@/core/api/ApiResponses";

export interface UserType {
  id: number;
  syId: string;
  adminId: string;
  name: string;
  email: string;
  password: string;
  salt: string;
  status: number;
  token: string;
  tokenExpiredAt: Date;
  createdAt: null;
  updatedAt: Date;
  deletedAt: null;
}
class AuthApi extends Api {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosPromise<ApiResponse<UserType>>> {
    return Api.post("/login", { email, password }, undefined, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static async logout(): Promise<AxiosPromise<ApiResponse>> {
    return Api.post("/logout");
  }
}

export default AuthApi;
