import {axiosPostRequest} from "../config/AxiosConfig";
import {ApplyEquipmentRequest} from "../types/EquipmentType";


const EQUIPMENT_MANAGER_PREFIX = "/equipment/manage";

export async function applyEquipment(data: ApplyEquipmentRequest) {
  const result = await axiosPostRequest(`${EQUIPMENT_MANAGER_PREFIX}/apply`, data);
  return result.data;
}
