/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './v1/members'
import { Methods as Methods1 } from './v1/members/_memberId@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/members'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'

  return {
    v1: {
      members: {
        _memberId: (val0: number) => {
          const prefix0 = `${PATH0}/${val0}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
            put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
              fetch<Methods1['put']['resBody']>(prefix, prefix0, PUT, option).json(),
            $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
              fetch<Methods1['put']['resBody']>(prefix, prefix0, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}`
          }
        },
        get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
        $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
