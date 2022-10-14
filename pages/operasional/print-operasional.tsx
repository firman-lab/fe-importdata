import { Button } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import SaldoText from "../../components/Atom/SaldoText";
import { dataOp, periodeOp } from "../../store";

const headsOp = [
  "PENDAPATANOPERASIONAL",
  "PENDAPATANPERPAJAKAN",
  "PENDAPATANNEGARABUKANPAJAK",
  "PENDAPATANHIBAH",
  "BEBANOPERASIONAL",
  "KEGIATANNONOPERASIONAL",
  // "POSLUARBIASA",
];

const jumlah = [
  "jumlahpendapatanperpajakan",
  "jumlahpendapatannegarabukanpajak",
  "jumlahbeban",
  "jumlahpendapatanhibah",
  "jumlahpendapatan",
]

export default function PrintLpe() {
  // const [data, setData] = useState([]);
  // const [periode, setPeriode] = useState<PeriodeLpeType>({
  //   bulan: "",
  //   dariTh: "",
  //   sampaiTh: "",
  // });

  // useEffect(() => {
  // const item: any = JSON.parse(localStorage.getItem("upDataLocal") || "[]");
  // setData(item);
  // const period = JSON.parse(localStorage.getItem("periodeLPE") || "{}");
  // setPeriode(period);
  // console.log(period);
  // }, []);

  const data = useRecoilValue(dataOp);
  const periode = useRecoilValue(periodeOp);

  function filt(a: string) {
    for (let i in headsOp) {
      if (a.replace(/ /g, "") == headsOp[i]) return true;
    }
  }
  function filt2(a: string) {
    for (let i in jumlah) {
      if (a.toLowerCase().replace(/ /g, "") == jumlah[i]) return true;
    }
  }

  return (
    <>
      <Head>
        <title>Laporan Operasional - Kementrian Pertahanan RI</title>
        <meta
          name="description"
          content="Meta description untuk Laporan Arus kas"
        />
      </Head>
      <div className="wrapper h-100">
        <div className="content-wrapper">
          <div className="m-1">
            <table className="table">
              <thead className="text-center">
                <tr className="hide-br-btm">
                  <th colSpan={5}>
                    <h4 className="text-bold">LAPORAN OPERASIONAL</h4>
                    <h5 className="text-bold">{`Untuk Periode Yang Berakhir Pada 31 ${periode.bulan} ${periode.dariTh} Hingga ${periode.sampaiTh}`}</h5>
                    <p className="text-italic">(dalam rupiah)</p>
                  </th>
                </tr>
                <tr>
                  <th scope="col">Uraian</th>
                  <th scope="col">Cttn</th>
                  <th scope="col">{periode.dariTh}</th>
                  <th scope="col">{periode.sampaiTh}</th>
                  <th scope="col">Kenaikan/Penurunan</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: any) => (
                  <tr key={index}>
                    {/* <pre> */}
                    <td className={item.A.match(/^JUMLAH.*$/) || item.A.match(/^SURPLUS.*$/) || filt(item.A) || filt2(item.A) ? "text-start text-bold" : "ps-5"}>
                      <pre>{item.A}</pre>
                    </td>
                    {/* </pre> */}
                    <td className="text-center"></td>
                    {item.E < 0 ? (
                      <td className="text-end">
                        (<SaldoText value={item.E * -1} />)
                      </td>
                    ) : filt(item.A) ? ( <td></td>) : (
                      <td className="text-end">
                        <SaldoText value={item.E} />
                      </td>
                    )}
                    {item.G < 0 ? (
                      <td className="text-end">
                        (<SaldoText value={item.G * -1} />)
                      </td>
                    ) : filt(item.A) ? ( <td></td>) : (
                      <td className="text-end">
                        <SaldoText value={item.G} />
                      </td>
                    )}
                    {item.I < 0 ? (
                      <td className="text-end">
                        (<SaldoText value={item.I * -1} />)
                      </td>
                    ) : filt(item.A) ? ( <td></td>) : (
                      <td className="text-end">
                        <SaldoText value={item.I} />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              className="d-print-none m-3"
              variant="contained"
              onClick={() => {
                window.print();
              }}
              sx={{
                backgroundColor: "#4640DE",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: " #2721c4",
                },
              }}
            >
              Print Now!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
