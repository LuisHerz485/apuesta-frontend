export interface MiddlewareWrapper<T> {
    code: string,
    IsValid: boolean,
    message: string,
    Body: T,
  }
  