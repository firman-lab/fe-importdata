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

const fileNameLpe = atom<String>({
  key: "filename-lpe",
  default: "",
});

const fileNameOp = atom<String>({
  key: "filename-op",
  default: "",
});

const periodeOp = atom<PeriodeLpeType>({
  key: "periode-op",
  default: {
    bulan: "",
    dariTh: "",
    sampaiTh: "",
  },
});

const dataOp = atom({
  key: "data-op",
  default: [],
});

const fileNameNeraca = atom<string>({
  key: "filename-ner",
  default: "",
});

const periodeNeraca = atom<PeriodeLpeType>({
  key: "periode-ner",
  default: {
    bulan: "",
    dariTh: "",
    sampaiTh: "",
  },
});

const dataNeraca = atom({
  key: "data-neraca",
  default: [],
});

const periodeRealisasi = atom<PeriodeLpeType>({
  key: "periode-real",
  default: {
    bulan: "",
    dariTh: "",
    sampaiTh: "",
  },
});

const dataRealisasi = atom({
  key: "data-real",
  default: [],
});

const fileNameRealisasi = atom<string>({
  key: "filename-real",
  default: "",
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
  fileNameLpe,
  periodeOp,
  dataOp,
  fileNameOp,
  fileNameNeraca,
  periodeNeraca,
  dataNeraca,
  dataRealisasi,
  periodeRealisasi,
  fileNameRealisasi,
};