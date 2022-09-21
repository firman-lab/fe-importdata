import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { periodLPE } from "../../store";
import ButtonInsert from "../Atom/ButtonInsert";
import Select from "../Atom/Select";

const bulanse = [
  {
    bulan: "Januari",
    value: "Januari",
  },
  {
    bulan: "Februari",
    value: "Februari",
  },
  {
    bulan: "Maret",
    value: "Maret",
  },
  {
    bulan: "April",
    value: "April",
  },
  {
    bulan: "Mei",
    value: "Mei",
  },
  {
    bulan: "Juni",
    value: "Juni",
  },
  {
    bulan: "Juli",
    value: "Juli",
  },
  {
    bulan: "Agustus",
    value: "Agustus",
  },
  {
    bulan: "September",
    value: "September",
  },
  {
    bulan: "Oktober",
    value: "Oktober",
  },
  {
    bulan: "November",
    value: "November",
  },
  {
    bulan: "Desember",
    value: "Desember",
  },
];

const tahunse = [
  {
    tahun: "2021",
    value: "2021",
  },
  {
    tahun: "2022",
    value: "2022",
  },
  {
    tahun: "2023",
    value: "2023",
  },
  {
    tahun: "2024",
    value: "2024",
  },
];

interface ModalProps {
  handleclose: () => void;
}

export default function ModalPeriode(props: ModalProps) {
  const { handleclose } = props;

  const [lpe, setlpe] = useRecoilState(periodLPE);
  const [bulan, setBulan] = useState(bulanse[11].value);
  const [dari, setDari] = useState(tahunse[1].value);
  const [sampai, setSampai] = useState(tahunse[0].value);

  const handleBulan = (e: any) => {
    const bulan = e.target.value;
    setBulan(bulan);
  };
  const handleDari = (e: any) => {
    const dari = e.target.value;
    setDari(dari);
  };
  const handleSampai = (e: any) => {
    const sampai = e.target.value;
    setSampai(sampai);
  };

  const setPeriode = () => {
    const rec = {
      bulan: bulan,
      dariTh: dari,
      sampaiTh: sampai,
    };
    console.log("rec : ", rec);
    setlpe(rec);
    handleclose();
  };

  return (
    <div className="d-flex justify-content-center">
      <form> Berakhir pada
        <select
          id="bulan"
          name="bulan"
          value={bulan}
          onChange={(e) => {
            handleBulan(e);
          }}
          placeholder="pilih Bulan"
        >
          {bulanse.map((buls, index) => (
            <option key={index} value={buls.value}>
              {buls.bulan}
            </option>
          ))}
        </select>
        <select
          id="dari"
          name="dari"
          value={dari}
          onChange={(e) => {
            handleDari(e);
          }}
          placeholder="pilih tahun"
          className="ms-2"
        >
          {tahunse.map((buls, index) => (
            <option key={index} value={buls.value}>
              {buls.tahun}
            </option>
          ))}
        </select>
        <select
          id="sampai"
          name="sampai"
          value={sampai}
          onChange={(e) => {
            handleSampai(e);
          }}
          placeholder="pilih tahun"
          className="ms-2"
        >
          {tahunse.map((buls, index) => (
            <option key={index} value={buls.value}>
              {buls.tahun}
            </option>
          ))}
        </select>
        <div className="p-3 text-center">
          <ButtonInsert title="Set Periode" onclick={setPeriode} />
        </div>
      </form>
    </div>
  );
}
