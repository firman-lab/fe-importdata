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

export function addSaldoKasXmin1(data: Array<any>) {
    const url = `${ROOT_API}/importdata/saldokasxmin1`;
    return callAPI({
      url,
      method: "POST",
      data,
    });
  }
export function addAkrualX(data: Array<any>) {
    const url = `${ROOT_API}/importdata/akrualx`;
    return callAPI({
      url,
      method: "POST",
      data,
    });
  }
export function addAkrualXmin1(data: Array<any>) {
    const url = `${ROOT_API}/importdata/akrualxmin1`;
    return callAPI({
      url,
      method: "POST",
      data,
    });
  }
export function addListTransBulanan(data: Array<any>) {
    const url = `${ROOT_API}/importdata/listtransbulanan`;
    return callAPI({
      url,
      method: "POST",
      data,
    });
  }
export function addListInOutBulanan(data: Array<any>) {
    const url = `${ROOT_API}/importdata/listinoutbulanan`;
    return callAPI({
      url,
      method: "POST",
      data,
    });
  }