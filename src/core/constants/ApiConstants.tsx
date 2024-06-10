export const REQUEST_TIMEOUT_MS = 20000
export const DEFAULT_ACTION_TIMEOUT = 10000
export const DEFAULT_EXECUTE_ACTION_TIMEOUT_MS = 15000
export const DEFAULT_TEST_DATA_SOURCE_TIMEOUT_MS = 30000
export const DEFAULT_APPSMITH_AI_QUERY_TIMEOUT_MS = 60000
export const FILE_UPLOAD_TRIGGER_TIMEOUT_MS = 60000

export enum API_STATUS_CODES {
  REQUEST_NOT_AUTHORISED = 401,
  RESOURCE_NOT_FOUND = 404,
  SERVER_ERROR = 502,
  SERVER_UNAVAILABLE = 503,
  REQUEST_FORBIDDEN = 403
}

export enum ERROR_CODES {
  PAGE_NOT_FOUND = 'PAGE_NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
  REQUEST_NOT_AUTHORISED = 'REQUEST_NOT_AUTHORIZED',
  REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',
  FAILED_TO_CORRECT_BINDING = 'FAILED_TO_CORRECT_BINDING',
  REQUEST_FORBIDDEN = 'REQUEST_FORBIDDEN'
}
