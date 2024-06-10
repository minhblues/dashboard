// import { OpenTimeType } from '@/services/api/SupplierApi'
import Cookies from 'js-cookie'

export const isEmpty = (obj: any) => {
  return !obj || Object.keys(obj).length === 0
}

export const parseJson = (str: string) => {
  try {
    return JSON.parse(str)
  } catch (e) {
    return null
  }
}

export const getCookie = (name: string) => {
  return Cookies.get(name)
}

export const setCookie = (name: string, value: any) => {
  return Cookies.set(name, value)
}

export const removeCookie = (name: string) => {
  Cookies.remove(name)
}

export const currencyFormat = (priceNumber: number) => {
  function toFixedIfNecessary(value: number, dp: number) {
    return +parseFloat(value?.toString()).toFixed(dp)
  }
  let result = ''
  if (!priceNumber) return '0 triệu'
  const million = 1000000
  const billion = 1000000000
  if (priceNumber < million) {
    result = `${toFixedIfNecessary(priceNumber / 1000, 2)}`

    // result = result.replace(/\./g, ',');
    return `${result} nghìn`
  }
  if (priceNumber < billion) {
    result = `${toFixedIfNecessary(priceNumber / million, 2)}`

    // result = result.replace(/\./g, ',');
    return `${result} triệu`
  }
  result = `${toFixedIfNecessary(priceNumber / billion, 2)}`

  // result = result.replace(/\./g, ',');
  return `${result} tỷ`
}

export const pick = <T>(obj: T, keys: (keyof T)[]) => {
  return keys.reduce((acc, key) => {
    if (obj && obj.hasOwnProperty(key)) {
      acc[key] = obj[key]
    }

    return acc
  }, {} as T)
}

// export const groupedOpenTime = serviceDetail?.openTime?.reduce((acc, item) => {
//   const key = item.week
//   if (!acc[key]) {
//     acc[key] = []
//   }
//   acc[key].push(item)

//   return acc
// }, {} as Record<string, (typeof serviceDetail)['openTime']>)

// export const groupOpenTime = (openTimes: OpenTimeType[]) => {
//   const data = openTimes.reduce((acc, item) => {
//     const key = item.week
//     if (!acc[key]) {
//       acc[key] = []
//     }
//     acc[key].push(item)

//     return acc
//   }, {} as Record<string, OpenTimeType[]>)

//   return data
// }

export const formatEmtyObject = <T extends object>(obj: T) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key as keyof T] !== undefined && obj[key as keyof T] !== null && obj[key as keyof T] !== '') {
      // @ts-ignore
      acc[key] = obj[key as keyof T]
    }

    return acc
  }, {}) as T
}
