import { StatusResponse } from "../interfaces/global/status-response";

export interface StatusResponseData<T> extends StatusResponse{
  data?: T
}
