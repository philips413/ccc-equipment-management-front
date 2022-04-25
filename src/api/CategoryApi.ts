import {axiosGetRequest, axiosPostRequest} from "../config/AxiosConfig";

export interface Category {
  categoryId?: number;
  categoryName: string;
  description?: string;
}

export async function createCategory(data: Category) {
  const result = await axiosPostRequest("/category", data);
  console.log(result.data);
}

export async function categoryList() {
  const result = await axiosGetRequest("/category/list");
  return result.data
}
