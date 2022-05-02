import {axiosPostRequest} from "../config/AxiosConfig";

export interface ApplyEquipmentRequest {
  equipmentId: number;
  qty: number;
  userId: number;
  description: string;
}

export interface ApplyEquipmentResponse {
  equipmentSerialId: string;
  equipmentId: number;
  equipmentName: string;
  userId: number;
}

const EQUIPMENT_MANAGER_PREFIX = "/equipment/manage";

export async function applyEquipment(data: ApplyEquipmentRequest) {
  const result = await axiosPostRequest(`${EQUIPMENT_MANAGER_PREFIX}/apply`, data);
  return result.data;
}
