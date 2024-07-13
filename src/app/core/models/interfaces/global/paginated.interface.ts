import { StatusResponseData } from "../statuts-response.entity";

export interface PaginatedResponse<T> extends StatusResponseData<T>{
  totalRecords: number,
  data?: T
}