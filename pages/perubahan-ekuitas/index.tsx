/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as XLSX from "xlsx";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Modal } from "react-bootstrap";
import ModalPeriode from "../../components/ModalPeriode";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { PeriodeLpeType } from "../../store/types";
import SaldoText from "../../components/Atom/SaldoText";
import { dataLPE, fileNameLpe, periodLPE } from "../../store";
import ModalOperasional from "../../components/ModalOperasional";
import Heads from "../../components/Atom/Head";

const headsLPE = [
  "ekuitasawal",
  "surplus/defisit-lo",
  "dampakkumulatifperubahankebijakanakuntansi",
  "koreksiyangmenambah/mengurangiekuitas",
  "transaksiantarentitas",
  "kenaikan/penurunanekuitas",
  "ekuitasakhir",
];

export default function PerubahanEkuitas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [items, setItems] = useRecoilState(dataLPE);
  const [fileName, setFileName] = useRecoilState(fileNameLpe);
  const [periodeLpe, setPeriodeLpe] = useRecoilState(periodLPE);
  // const [periodeLpe, setperiodeLpe] = useState<PeriodeLpeType>({
  //   bulan: "",
  //   dariTh: "",
  //   sampaiTh: "",
  // });

  const readExcel = (file: any) => {
    const fileReader = new FileReader();
    const promise = new Promise((resolve, reject) => {
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target?.result;
        if (!bufferArray) {
          alert("Type eRROR");
        }
        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];
        // ws['!ref'] = "A15:"
        const data = XLSX.utils.sheet_to_json(ws, {
          header: "A",
          blankrows: true,
          range: 14,
        });
        // console.log(data);
        resolve(data);
      };
      fileReader.onerror = (e: any) => {
        reject(e);
      };
    });
    promise.then((d: any) => {
      setItems(d);
      localStorage.setItem("upDataLocal", JSON.stringify(d));
      // console.log(d);
    });
  };

  function filt(a: string) {
    for (let i in headsLPE) {
      if (a.toLowerCase().replace(/ /g, "") === headsLPE[i]) return true;
    }
  }

  return (
    <>
      <Heads title="Fist - Laporan Perubahan Ekuitas" />
      <div className="screen-cover d-none d-xl-none" />
      <div className="row">
        <div className="col-12 col-lg-3 col-navbar d-none d-xl-block">
          <Sidebar activeMenu="lpe" />
        </div>
        <div className="col-12 col-xl-9">
          <div className="nav">
            <div className="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
              <div className="d-flex justify-content-start align-items-center">
                <button id="toggle-navbar" onClick={() => {}}>
                  <img
                    src="../assets/img/global/burger.svg"
                    className="mb-2"
                    alt=""
                  />
                </button>
                <h2 className="nav-title">Laporan Perubahan Ekuitas</h2>
              </div>
              <button className="btn-notif d-block d-md-none">
                <img src="../assets/img/global/bell.svg" alt="" />
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center nav-input-container">
              <div className="nav-input-group">
                <input
                  type="text"
                  className="nav-input"
                  placeholder="Search people, team, project"
                />
                <button className="btn-nav-input">
                  <img src="../assets/img/global/search.svg" alt="" />
                </button>
              </div>
              <button className="btn-notif d-none d-md-block">
                <img src="../assets/img/global/bell.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="content">
            <div className="row">
              {items.length > 0 ? (
                <div />
              ) : (
                <div className="col-12">
                  <div className="col-12 col-md-12 col-lg-12">
                    <div className="statistics-card import-link">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-between align-items-center">
                          <h5 className="content-desc text-secondary">
                            Import data Excel.xlsx
                          </h5>
                          <h3 className="statistics-value text-white">
                            Import Data Perubahan Ekuitas
                          </h3>
                          <Button
                            onClick={handleShow}
                            variant="contained"
                            sx={{
                              backgroundColor: "#4640DE",
                              textTransform: "capitalize",
                              "&:hover": {
                                backgroundColor: " #2721c4",
                              },
                              fontSize: 24,
                              width: 250,
                              height: 65,
                            }}
                          >
                            Set Periode
                          </Button>
                          {/* <button className="btn-primary" type="button" onClick={handleShow}>
                          Tambah Data
                        </button> */}
                          <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            size="lg"
                            aria-labelledby="detail-modal"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Pilih Periode</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <ModalOperasional
                                handleclose={() => {
                                  handleClose();
                                }}
                                handleReload={() => {}}
                                dataPeriode={(periodelpe: PeriodeLpeType) => {
                                  setPeriodeLpe(periodelpe);
                                }}
                              />
                            </Modal.Body>
                          </Modal>
                          {periodeLpe.dariTh === "" || items.length > 0 ? (
                            <div />
                          ) : (
                            <input
                              className="text-center mt-3 pt-3 pe-2 pb-3 ps-2 bg-white"
                              type="file"
                              accept=".xlsx"
                              onChange={(e: any) => {
                                if (e.target != null) {
                                  const file = e.target.files[0]!;
                                  readExcel(file);
                                  setFileName(e.target.files[0].name);
                                  // const namaFile = e.target.files[0].name;
                                  localStorage.setItem(
                                    "namaFileLpe",
                                    JSON.stringify(e.target.files[0].name)
                                  );
                                } else {
                                  // eslint-disable-next-line no-alert
                                  alert("pilih file xlsx duls!");
                                }
                              }}
                            />
                          )}
                        </div>
                      </div>
                      {/* <div className="statistics-list">
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo-4.png"
                          alt=""
                        />
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo-3.png"
                          alt=""
                        />
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo.png"
                          alt=""
                        />
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo-1.png"
                          alt=""
                        />
                        <img
                          className="statistics-image"
                          src="../assets/img/home/history/photo-2.png"
                          alt=""
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              )}
              <section className="mt-3">
                <div className="card p-2">
                  <div className="d-flex justify-content-between p-2">
                    <h4>{fileName}</h4>
                    <div className="p-2">
                      <Button
                        variant="contained"
                        disabled={items.length > 0 ? false : true}
                        onClick={() => {
                          setItems([]);
                          setFileName("");
                        }}
                        sx={{
                          backgroundColor: "#303f9f",
                          textTransform: "capitalize",
                          "&:hover": {
                            backgroundColor: "#3f51b5",
                          },
                        }}
                      >
                        Reset Data
                      </Button>
                      {
                        <Link href="/print-lpe">
                          <Button
                            className="d-print-none m-3"
                            variant="contained"
                            sx={{
                              backgroundColor: "#4640DE",
                              textTransform: "capitalize",
                              "&:hover": {
                                backgroundColor: " #2721c4",
                                color: "#fff",
                              },
                            }}
                          >
                            Print!
                          </Button>
                        </Link>
                      }
                    </div>
                  </div>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Uraian</TableCell>
                          <TableCell align="center">Catatan</TableCell>
                          <TableCell align="center">
                            {periodeLpe.dariTh}
                          </TableCell>
                          <TableCell align="center">
                            {periodeLpe.sampaiTh}
                          </TableCell>
                          <TableCell align="center">
                            Kenaikan/Penurunan
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items.map((row: any, index: any) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              align="left"
                              sx={
                                filt(row.A)
                                  ? { fontWeight: 500 }
                                  : { paddingLeft: 7 }
                              }
                            >
                              {/* {row.A.replace(/\s/g, "&nbsp;")} */}
                              {row.A}
                            </TableCell>
                            <TableCell align="center" width={2}>
                              {row.KDWILAYAH}
                            </TableCell>
                            {row.E < 0 ? (
                              <TableCell align="right">
                                (<SaldoText value={row.E * -1} />)
                              </TableCell>
                            ) : (
                              <TableCell align="right">
                                <SaldoText value={row.E} />
                              </TableCell>
                            )}
                            {row.G < 0 ? (
                              <TableCell align="right">
                                (<SaldoText value={row.G * -1} />)
                              </TableCell>
                            ) : (
                              <TableCell align="right">
                                <SaldoText value={row.G} />
                              </TableCell>
                            )}
                            {row.I < 0 ? (
                              <TableCell align="right">
                                (<SaldoText value={row.I * -1} />)
                              </TableCell>
                            ) : (
                              <TableCell align="right">
                                <SaldoText value={row.I} />
                              </TableCell>
                            )}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
