import { convertObjectToQueryParams, matchesURLPattern } from './URLUtils'

describe('convertObjectToQueryParams', () => {
  it('should convert an object to query parameters', () => {
    const object = {
      name: 'John Doe',
      age: 30,
      city: 'New York',
      phone: 0
    }

    const expected = '?name=John%20Doe&age=30&city=New%20York&phone=0'
    const result = convertObjectToQueryParams(object)

    expect(result).toEqual(expected)
  })

  it('should handle null and undefined values', () => {
    const object = {
      name: 'John Doe',
      age: null,
      city: undefined
    }

    const expected = '?name=John%20Doe'
    const result = convertObjectToQueryParams(object)

    expect(result).toEqual(expected)
  })

  it('should return an empty string for an empty object', () => {
    const object = {}

    const expected = ''
    const result = convertObjectToQueryParams(object)

    expect(result).toEqual(expected)
  })
})

describe('matchesURLPattern', () => {
  it('should return true for a valid URL', () => {
    const url = 'https://www.example.com'
    const result = matchesURLPattern(url)

    expect(result).toBe(true)
  })

  it('should return false for an invalid URL', () => {
    const url = 'example'
    const result = matchesURLPattern(url)

    expect(result).toBe(false)
  })
})
