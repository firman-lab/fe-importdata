import React, { useEffect, useState } from "react";
import { PeriodeLpeType } from "../../store/types";
import ButtonInsert from "../Atom/ButtonInsert";

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
    value: 2021,
  },
  {
    tahun: "2022",
    value: 2022,
  },
  {
    tahun: "2023",
    value: 2023,
  },
  {
    tahun: "2024",
    value: 2024,
  },
];

interface ModalProps {
  handleclose: () => void;
  handleReload: () => void;
  dataPeriode: any;
}

export default function ModalOperasional(props: ModalProps) {
  const { handleclose, handleReload, dataPeriode } = props;

  // const [lpe, setlpe] = useRecoilState(periodLPE);
  const [lpe, setLpe] = useState<PeriodeLpeType>({
    bulan: "",
    dariTh: "",
    sampaiTh: "",
  });

  const [bulan, setBulan] = useState(
    lpe.bulan != "" ? lpe.bulan : bulanse[11].value
  );
  const [dari, setDari] = useState(
    lpe.dariTh != "" ? lpe.dariTh : tahunse[1].value.toString()
  );
  const [sampai, setSampai] = useState(
    lpe.dariTh != "" ? lpe.dariTh : tahunse[0].value.toString()
  );

  const handleBulan = (e: any) => {
    const bulan = e.target.value;
    setBulan(bulan);
  };
  const handleDari = (e: any) => {
    const dari = e.target.value;
    setDari(dari);
    setSampai((dari - 1).toString());
  };
  const handleSampai = (e: any) => {
    const sampai = e.target.value;
    setSampai(sampai);
  };

  const setPeriode = () => {
    const rec: PeriodeLpeType = {
      bulan: bulan,
      dariTh: dari,
      sampaiTh: sampai,
    };
    console.log("rec : ", rec);
    // setlpe(rec);
    // localStorage.setItem("periodeLPE", JSON.stringify(rec));
    handleclose();
    handleReload();
  };

  // useEffect(() => {
  //   const periode = JSON.parse(localStorage.getItem("periodeLPE") || "{}");
  //   if (periode.bulan != "" ){
  //     setLpe(periode);
  //     console.log(periode);
  //     setBulan(periode.bulan);
  //     setDari(periode.dariTh);
  //     setSampai(periode.sampaiTh);
  //   }
  // }, [])

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <form>
          <label className="me-2">{`Berakhir pada 31 ${lpe.bulan}`}</label>
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
          <label className="ms-2">Sampai</label>
          <select
            id="sampai"
            name="sampai"
            disabled
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
        </form>
      </div>
      <div className="mt-3 p-3 text-end">
        <ButtonInsert
          title="Set Periode"
          onclick={() => {
            dataPeriode({ bulan: bulan, dariTh: dari, sampaiTh: sampai });
            setPeriode();
          }}
        />
      </div>
    </>
  );
}
