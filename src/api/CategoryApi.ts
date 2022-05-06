import {axiosGetRequest, axiosPostRequest} from "../config/AxiosConfig";
import {CategoryRequest} from "../types/CategoryType";


export async function createCategory(data: CategoryRequest) {
  const result = await axiosPostRequest("/category", data);
  console.log(result.data);
}

export async function categoryList() {
  const result = await axiosGetRequest("/category/list");
  return result.data
}
