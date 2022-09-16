import { ListItem } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import NumberFormat from "react-number-format";


export default function PrintLpe() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const item = JSON.parse(localStorage.getItem("upDataLocal"));
      setData(item);
    }, [])
    
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
                <h4 className="text-bold">
                    LAPORAN PERUBAHAN EKUITAS
                </h4>
                <h5 className="text-bold">
                    UNTUK PERIODE YANG BERAKHIR 
                </h5>
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
                            <th scope="col">2022</th>
                            <th scope="col">2021</th>
                            <th scope="col">Kenaikan/Penurunan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item:any, index:any) => (
                            <tr key={index}>
                                <td className="text-start">
                                    {item.A.replace(/\s/g, "&nbsp;")}
                                </td>
                                <td className="text-center">
                                    -
                                </td>
                                <td className="text-end">
                                
                                    {item.E}
                                </td>
                                <td className="text-end">
                                    {item.G}
                                </td>
                                <td className="text-end">
                                    {item.I}
                                </td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
            <button type="button" className="d-print-none" onClick={() => {window.print()}}>Print Now!</button>

        </div>
    </div>

    </>
  )
}
