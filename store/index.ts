import { atom } from "recoil";
import { PeriodeLpeType } from "./types";

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
//state untuk lpe
const periodLPE = atom<PeriodeLpeType>({
  key: "periode-lpe",
  default: {
    bulan: "",
    dariTh: "",
    sampaiTh: "",
  },
});
const periodeOp = atom<PeriodeLpeType>({
  key: "periode-op",
  default: {
    bulan: "",
    dariTh: "",
    sampaiTh: "",
  },
});

const fileNameLpe = atom<String>({
  key: "filename-lpe",
  default: ""
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
  periodLPE,
  periodeOp,
  fileNameLpe
};