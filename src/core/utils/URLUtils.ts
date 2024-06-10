import { AxiosRequestConfig } from 'axios'

export function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const keys = urlParams.keys()
  let key = keys.next().value
  const queryParams: Record<string, string> = {}
  while (key) {
    queryParams[key] = urlParams.get(key) as string
    key = keys.next().value
  }

  return queryParams
}

function isNil(value: any): boolean {
  return value === null || value === undefined
}
export function convertObjectToQueryParams(object: Record<string, any>): string {
  if (!isNil(object)) {
    const paramArray: string[] = Object.keys(object)
      .map(key => {
        if (isNil(object[key])) {
          return ''
        }

        return encodeURIComponent(key) + '=' + encodeURIComponent(object[key])
      })
      ?.filter(param => param !== '')
    if (paramArray?.length > 0) {
      return '?' + paramArray.join('&')
    }
  }

  return ''
}

export function convertObjectToBody(body: Record<string, string>, config: AxiosRequestConfig = {}) {
  if (
    !isNil(body) &&
    typeof body === 'object' &&
    config.headers &&
    config.headers['Content-Type'] === 'multipart/form-data'
  ) {
    const form = new FormData()
    Object.keys(body).forEach(key => {
      form.append(key, body[key])
    })

    return form
  }

  return body
}

export function isValidURL(url: string): boolean {
  try {
    new URL(url)

    return true
  } catch (e) {
    return false
  }
}

export function matchesURLPattern(url: string) {
  return (
    url.match(
      /\(?(?:(http|https|ftp|mailto|tel):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/g
    ) !== null
  )
}
