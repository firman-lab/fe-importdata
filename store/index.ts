import { atom } from "recoil";

const activeStepRec = atom({
  key: "active-step",
  default: 0,
});

const ereconPendapatanRec = atom({
  key: "erecon-income",
  default: [],
});

const ereconBelanjaRec = atom({
  key: "erecon-belanja",
  default: [],
});
const saldoKasXRec = atom({
  key: "saldo-kasx",
  default: [],
});
const saldoKasXmin1Rec = atom({
  key: "saldo-kasx-1",
  default: [],
});
const saldoAkrualXRec = atom({
  key: "saldo-akrualx",
  default: [],
});
const saldoAkrualXmin1Rec = atom({
  key: "saldo-akrualx-1",
  default: [],
});
const listTransBulananRec = atom({
  key: "list-trans-bulanan",
  default: [],
});
const TransInOutBulananRec = atom({
  key: "trans-input-bulanan",
  default: [],
});

export {
  activeStepRec,
  ereconPendapatanRec,
  ereconBelanjaRec,
  saldoKasXRec,
  saldoKasXmin1Rec,
  listTransBulananRec,
  saldoAkrualXRec,
  saldoAkrualXmin1Rec,
  TransInOutBulananRec,
};
