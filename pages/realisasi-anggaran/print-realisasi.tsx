import { Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import SaldoText from "../../components/Atom/SaldoText";
import { dataRealisasi, periodeRealisasi } from "../../store";

export default function PrintRealisasi() {
  const data = useRecoilValue(dataRealisasi);
  const periode = useRecoilValue(periodeRealisasi);
  return (
    <>
      <Head>
        <title>Realisasi Anggaran - Kementrian Pertahanan RI</title>
        <meta
          name="description"
          content="Meta description untuk Laporan Arus kas"
        />
      </Head>
      <div className="wrapper h-100">
        <div className="content-wrapper">
          <div className="m-1">
            <table className="table table-bordered table-sm">
              <thead className="text-center ">
              <tr className="hide-br-top hide-br-left hide-br-right">
                  <th colSpan={6}>
                    <h4 className="text-bold">LAPORAN REALISASI ANGGARAN</h4>
                    <h5 className="text-bold">{`Untuk Periode Yang Berakhir Pada 31 ${periode.bulan} ${periode.dariTh} Hingga ${periode.sampaiTh}`}</h5>
                    <p className="text-italic">(dalam rupiah)</p>
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="align-middle" rowSpan={2}>NO</th>
                  <th scope="col" className="align-middle" rowSpan={2}>Uraian</th>
                  <th scope="col" colSpan={2}>{periode?.dariTh !== '' ? periode.dariTh : '2022'}</th>
                  <th scope="col" rowSpan={2} className="text-center align-middle">% thd Anggaran</th>
                  <th scope="col">{periode.sampaiTh !== '' ? periode.sampaiTh : '2021'}</th>
                </tr>
                <tr>
                  <th scope="col">Anggaran</th>
                  <th scope="col">Realisasi</th>
                  <th scope="col">Realisasi</th>
                </tr>
              </thead>
              <tbody>
                {data
                .map((item : any, index: any) => (
                  <tr key={index} className="align-middle">
                    {/* <pre> */}
                    <td className="text-center">{item.A}</td>
                    <td className="text-start">
                      {/* {item.A.replace(/\s/g, "&nbsp;")} */}
                      <pre className={item.A !== '' || item.B.match(/^JUMLAH.*$/) ? 'text-bold align-middle' : "align-middle" }>{item.B}</pre>                              
                    </td>
                    {/* </pre> */}
                    {item.D < 0 ? (
                      <td className="text-end">
                        (<SaldoText value={item.D * -1} />)
                      </td>
                    ) : (
                      <td className="text-end">
                        <SaldoText value={item.D} />
                      </td>
                    )}
                    {item.E < 0 ? (
                      <td className="text-end">
                        (<SaldoText value={item.E * -1} />)
                      </td>
                    ) : (
                      <td className="text-end">
                        <SaldoText value={item.E} />
                      </td>
                    )}
                    {/* <td className="text-end">
                      <SaldoText value={row.F} />
                    </td> */}
                    {item.G < 0 ? (
                      <td className="text-end">
                        (<SaldoText value={item.G * -1} />)
                      </td>
                    ) : (
                      <td className="text-end">
                        <SaldoText value={item.G} />
                      </td>
                    )}
                    {item.P < 0 ? (
                      <td className="text-end">
                        (<SaldoText value={item.P * -1} />)
                      </td>
                    ) : (
                      <td className="text-end">
                        <SaldoText value={item.P} />
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
