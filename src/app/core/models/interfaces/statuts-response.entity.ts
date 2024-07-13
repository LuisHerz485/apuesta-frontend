import { IStatusResponse } from "./global/status-response.interface";

export interface StatusResponseData<T> extends IStatusResponse{
  data?: T
}

export interface StatusResponseLogin<T> extends IStatusResponse{
  token: string;
  data : T
}
