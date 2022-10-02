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
          <div className="text-center">
            <h4 className="text-bold">LAPORAN Realisasi Anggaran</h4>
            <h5 className="text-bold">{`Untuk Periode Yang Berakhir Pada 31 ${periode.bulan} ${periode.dariTh} Hingga ${periode.sampaiTh}`}</h5>
            <p className="text-italic">(dalam rupiah)</p>
          </div>
          <div className="mt-5">
            <table className="table table-bordered table-sm">
              <thead className="text-center ">
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
                {data.map((row : any, index: any) => (
                  <tr key={index} className="align-middle">
                    {/* <pre> */}
                    <td className="text-center">{row.A}</td>
                    <td className="text-start">
                      {/* {item.A.replace(/\s/g, "&nbsp;")} */}
                      <pre className={row.A !== '' || row.B.match(/^JUMLAH.*$/) ? 'text-bold align-middle' : "align-middle" }>{row.B}</pre>                              
                    </td>
                    {/* </pre> */}
                    <td className="text-end">
                      <SaldoText value={row.D} />
                    </td>
                    <td className="text-end">
                      <SaldoText value={row.E} />
                    </td>
                    {/* <td className="text-end">
                      <SaldoText value={row.F} />
                    </td> */}
                    <td className="text-center">
                      <SaldoText value={row.G} />
                    </td>
                    <td className="text-end">
                      <SaldoText value={row.P} />
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
