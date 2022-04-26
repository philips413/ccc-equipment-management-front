import {axiosGetRequest, axiosPostRequest} from "../config/AxiosConfig";

interface EquipmentRequest {
  equipmentId?: number;
  name: string,
  category: number,
  description?: string;
  status?: string;
  qty: number;
  maxUseQty: number;
  minUseQty: number;
}

const EQUIPMENT_PREFIX = "/equipment";

export async function equipmentList() {
  const result = await axiosGetRequest(`${EQUIPMENT_PREFIX}/list`);
  return result.data;
}

export async function createEquipment(data: EquipmentRequest) {
    const result = await axiosPostRequest(`${EQUIPMENT_PREFIX}`, data);
    return result.data;
}
