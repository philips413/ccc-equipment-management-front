export interface EquipmentRequest {
  equipmentId?: number;
  name: string,
  category: number,
  description?: string;
  status?: string;
  qty: number;
}

export interface EquipmentResponse {
  equipmentId: number;
  name: string;
  category: number;
  description: string;
  status: number;
  qty: number;
  useQty: number;
  createdAt: string;
}

export interface ApplyEquipmentRequest {
  equipmentId: number;
  qty: number;
  userId: number;
  propose: string;
  category: number;
  name: string;
  hp: string;
}
