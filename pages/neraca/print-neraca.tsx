import { Button } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useRecoilValue } from "recoil";
import SaldoText from "../../components/Atom/SaldoText";
import { dataNeraca, periodeNeraca } from "../../store";

const heads = [
  'ASET',
  "JUMLAHASET",
  'KEWAJIBAN',
  "JUMLAHKEWAJIBAN",
  'EKUITAS',
  "JUMLAHKEWAJIBANDANEKUITAS"
];

const subHead = [
  'ASETTETAP',
  "ASETLAINNYA",
  'ASETLANCAR',
  'KEWAJIBANJANGKAPANJANG',
  'JUMLAHKEWAJIBANJANGKAPANJANG',
  'KEWAJIBANJANGKAPENDEK',
  'JUMLAHKEWAJIBANJANGKA',
  "JUMLAHASETLANCAR",
  "JUMLAHASETTETAP",
  "JUMLAHASETLAINNYA",
  "EKUITAS",
  "JUMLAHEKUITAS",
];


export default function PrintLpe() {
  const data = useRecoilValue(dataNeraca);
  const periode = useRecoilValue(periodeNeraca);

  function filterHead(a : string) {
    for(let i in heads){
     if(a.replace(/ /g,'') === heads[i])
       return true;
    }
   }

 function filterSub(a : string) {
    for(let i in subHead){
     if(a.replace(/ /g,'') === subHead[i])
       return true;
    }
   }

  return (
    <>
      <Head>
        <title>Laporan Neraca - Kemenhan RI</title>
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
                    <h4 className="text-bold">LAPORAN NERACA</h4>
                    <h5 className="text-bold">{`Untuk Periode Yang Berakhir Pada 31 ${periode.bulan} ${periode.dariTh} Hingga ${periode.sampaiTh}`}</h5>
                    <p className="text-italic">(dalam rupiah)</p>
                  </th>
                </tr>
                <tr className="mt-5">
                  <th scope="col">Uraian</th>
                  <th scope="col">Cttn</th>
                  <th scope="col">{periode.dariTh}</th>
                  <th scope="col">{periode.sampaiTh}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: any) => (
                  <tr key={index}>
                    {/* <pre> */}
                    <td
                      className={
                        filterHead(item.A)
                          ? "text-bold" : filterSub(item.A) ? "text-bold ps-4"
                          : "ps-5"
                      }
                    >
                      {" "}
                      {item.A}
                    </td>
                    {/* </pre> */}
                    <td className="text-center"></td>
                    {item.F < 0 ? (
                      <td className="text-end">
                        (<SaldoText value={item.F * -1} />)
                      </td>
                    ) : (
                      <td className="text-end">
                        <SaldoText value={item.F} />
                      </td>
                    )}
                    {item.H < 0 ? (
                      <td className="text-end">
                        (<SaldoText value={item.F * -1} />)
                      </td>
                    ) : (
                      <td className="text-end">
                        <SaldoText value={item.H} />
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
