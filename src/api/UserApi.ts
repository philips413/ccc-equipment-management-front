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

const EQUIPMENT_PREFIX = "/user";

export async function createUser(data: UserRequest) {
  const result = await axiosPostRequest(`${EQUIPMENT_PREFIX}`, data);
  return result.data;
}

export async function getUserList() {
  const result = await axiosGetRequest(`${EQUIPMENT_PREFIX}/list`, {});
  return result.data;
}
