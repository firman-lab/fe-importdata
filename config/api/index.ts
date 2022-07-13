import axios, { AxiosRequestConfig } from "axios";

export default async function callAPI({
  url,
  method,
  data,
  headers,
}: AxiosRequestConfig) {
  // eslint-disable-next-line object-curly-newline
  const response = await axios({ url, method, data, headers }).catch(
    (err) => err.response,
  );
  if (response.data.status >= 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: response.data.message,
    data: response.data.data,
  };
  return res;
}
