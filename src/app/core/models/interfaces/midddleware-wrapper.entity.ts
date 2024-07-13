export interface MiddlewareWrapper<T> {
    statusCode: number,
    message: string,
    success: boolean,
    totalRecords? : number,
    data: T,
  }
  