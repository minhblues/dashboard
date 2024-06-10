export interface APIResponseError {
  code: string | number
  message: string
}

export interface ResponseMeta {
  status: number
  success: boolean
  error?: APIResponseError
}

// responseMeta: ResponseMeta;

export interface ApiResponse<T = unknown> {
  code: number
  data: T
  success: boolean
}

export interface GetListType<T> {
  records: T[]
  total: number
  size: number
  current: number
  orders: any[]
  optimizeCountSql: boolean
  searchCount: boolean
  maxLimit: null
  countId: null
  pages: number
}
