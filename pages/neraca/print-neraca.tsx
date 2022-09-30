import { Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SaldoText from "../../components/Atom/SaldoText";
import { dataOp, periodeOp } from "../../store";
import { PeriodeLpeType } from "../../store/types";

export default function PrintLpe() {
  const [data, setData] = useRecoilState(dataOp);
  const [periode, setPeriode] = useRecoilState(periodeOp);
  // const [periode, setPeriode] = useState<PeriodeLpeType>({
  //   bulan: "",
  //   dariTh: "",
  //   sampaiTh: "",
  // });

  // const periode = useRecoilValue(periodLPE);

  useEffect(() => {
    // const item: any = JSON.parse(localStorage.getItem("upDataLocal") || "[]");
    // setData(item);
    // const period = JSON.parse(localStorage.getItem("periodeLPE") || "{}");
    // setPeriode(period);
    // console.log(period);
  }, []);

  return (
    <>
      <Head>
        <title>Laporan Arus Kas - DPK Amikom</title>
        <meta
          name="description"
          content="Meta description untuk Laporan Arus kas"
        />
      </Head>
      <div className="wrapper h-100">
        <div className="content-wrapper">
          <div className="text-center">
            <h4 className="text-bold">LAPORAN OPERASIONAL</h4>
            <h5 className="text-bold">{`Untuk Periode Yang Berakhir Pada 31 ${periode.bulan} ${periode.dariTh} Hingga ${periode.sampaiTh}`}</h5>
            <p className="text-italic">(dalam rupiah)</p>
          </div>
          <div className="mt-5">
            {/* <div className="row text-center">
                    <div className="col-5">
                        Uraian
                    </div>
                    <div className="col-1">
                        Cttn
                    </div>
                    <div className="col-3">
                        2021
                    </div>
                    <div className="col-3">
                        2022
                    </div>
                </div> */}
            <table className="table">
              <thead className="text-center">
                <tr>
                  <th scope="col">Uraian</th>
                  <th scope="col">Cttn</th>
                  <th scope="col">{periode.dariTh}</th>
                  <th scope="col">{periode.sampaiTh}</th>
                  <th scope="col">Kenaikan/Penurunan</th>
                </tr>
              </thead>
              <tbody>
                {data
                .filter((row: any) => {
                  if (
                    row.E !== "" &&
                    row.I !== "KENAIKAN/ PENURUNAN"
                  ) {
                    return row;
                  }
                })
                .map((item: any, index: any) => (
                  <tr key={index}>
                    {/* <pre> */}
                    <td className="text-start">
                      {/* {item.A.replace(/\s/g, "&nbsp;")} */}
                      <pre>{item.A}</pre>
                    </td>
                    {/* </pre> */}
                    <td className="text-center">-</td>
                    <td className="text-end">
                      <SaldoText value={item.E} />
                    </td>
                    <td className="text-end">
                      <SaldoText value={item.G} />
                    </td>
                    <td className="text-end">
                      <SaldoText value={item.I} />
                    </td>
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
