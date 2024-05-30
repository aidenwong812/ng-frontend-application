import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

axios.interceptors.response.use(
  response => response,
  error => {
    handleError(error)
    return Promise.reject(error)
  }
)

const responseData = <T extends AxiosResponse<any>>(response: T) => response.data

const handleError = (error: AxiosError) => {
  console.error('error', error.message)
}

class CoreAPIService {
  get = async <R>(url: string, params: any = {}) =>
    axios
      .request<R>({
        method: 'get',
        url,
        params,
      })
      .then<R>(responseData)
      .catch(handleError)

  post = async <R>(url: string, data: any = {}, { ...config }: AxiosRequestConfig = {}) =>
    axios
      .request<R>({
        method: 'post',
        url,
        data,
        headers: {
          'Content-Type': 'application/json',
        },
        ...config,
      })
      .then<R>(responseData)
      .catch(handleError)
  put = async <R>(url: string, data: any) =>
    axios
      .request<R>({
        method: 'put',
        url,
        data,
      })
      .then<R>(responseData)
      .catch(handleError)

  patch = async <R>(url: string, data: any = {}) =>
    axios
      .request<R>({
        method: 'patch',
        url: `${url}`,
        data,
      })
      .then<R>(responseData)
      .catch(handleError)

  delete = async <R>(url: string, data: any = {}) =>
    axios
      .request<R>({
        method: 'delete',
        url: `${url}`,
        data,
      })
      .then<R>(responseData)
      .catch(handleError)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CoreAPIService()
