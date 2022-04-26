import {axiosGetRequest, axiosPostRequest} from "../config/AxiosConfig";

export interface UserRequest {
  userSysId?: number;
  name: string;
  nickName?: string;
  userId: string;
  password: string;
  level?: number;
  profileImage?: string;
  createdAt?: string;
}

export async function createUser(data: UserRequest) {
  const result = await axiosPostRequest("/user", data);
}