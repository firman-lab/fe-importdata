import callAPI from "../config/api";

const ROOT_API = "http://localhost:8080";

export function addData(data: Array<any>) {
    const url = `${ROOT_API}/importdata/erekonpendapatan`;
    return callAPI({
      url,
      method: "POST",
      data,
    });
  }
  
export function addERBelanja(data: Array<any>) {
    const url = `${ROOT_API}/importdata/erekonbelanja`;
    return callAPI({
      url,
      method: "POST",
      data,
    });
  }

export function addSaldoKasX(data: Array<any>) {
    const url = `${ROOT_API}/importdata/saldokasx`;
    return callAPI({
      url,
      method: "POST",
      data,
    });
  }