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

export default function PerubahanEkuitas() {
  const [items, setItems] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [periodeLpe, setperiodeLpe] = useState<PeriodeLpeType>({
    bulan: "",
    dariTh: "",
    sampaiTh: "",
  });
  // const [dataLpe, setDataLpe] = useRecoilState(lpeData);

  const getReloadData = () => {
    const item: any = JSON.parse(localStorage.getItem("upDataLocal") || "[]");
    setItems(item);
    const named: string = localStorage.getItem("namaFileLpe") || "";
    setName(named);
    const periode: any = JSON.parse(localStorage.getItem("periodeLPE") || "{}");
    setperiodeLpe(periode);
  };

  useEffect(() => {
    getReloadData();
    console.log("periode", periodeLpe);
  }, []);

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

  const sendPeriode = () => {
    // const periode = {
    //   bulan: periodeLpe.bulan,
    //   dari: periodeLpe.dariTh,
    //   sampai: periodeLpe.sampaiTh,
    // };
    // localStorage.setItem("periodeLPE", JSON.stringify(periode));
    // localStorage.setItem("upDataLocal", JSON.stringify(items));
    // localStorage.setItem("namaFileLpe", JSON.stringify(name));
  };

  const removeData = () => {
    localStorage.removeItem("upDataLocal");
    setItems([]);
    localStorage.removeItem("namaFileLpe");
    setName("");
    localStorage.removeItem("periodeLPE");
    setperiodeLpe({
      bulan: "",
      dariTh: "",
      sampaiTh: "",
    });
  };

  return (
    <>
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
              <div className="col-12">
                <div className="col-12 col-md-12 col-lg-12">
                  <div className="statistics-card import-link">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="d-flex flex-column justify-content-between align-items-center">
                        <h5 className="content-desc text-secondary">
                          Import data Excel.xlsx
                        </h5>
                        <h3 className="statistics-value text-white">
                          Laporan Perubahan Ekuitas
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
                          }}
                        >
                          Set Periode Data
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
                            <ModalPeriode
                              handleclose={() => {
                                handleClose();
                              }}
                              handleReload={() => {
                                getReloadData();
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
                                setName(e.target.files[0].name);
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
                      <button className="ms-3 btn-statistics ">
                        <img src="../assets/img/global/times.svg" alt="" />
                      </button>
                    </div>
                    <div className="statistics-list">
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
                    </div>
                  </div>
                </div>
              </div>
              <section className="mt-3">
                <div className="card p-2">
                  <div className="d-flex justify-content-between p-2">
                    <h4>{name}</h4>
                    <div className="p-2">
                      {/* <button
                        className="btn btn-danger me-2"
                        onClick={removeData}
                      >
                        Reset Data
                      </button> */}
                      <Button
                        variant="contained"
                        onClick={removeData}
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
                      { <Link href="/print-lpe">
                        <a
                          type="button"
                          className="btn btn-primary ms-3"
                          onClick={sendPeriode}
                          target="_blank"
                        >
                          Print
                        </a>
                      </Link>}
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
                            <TableCell component="th" scope="row" align="left">
                              {/* {row.A.replace(/\s/g, "&nbsp;")} */}
                              <pre>{row.A}</pre>
                            </TableCell>
                            <TableCell align="center" width={2}>
                              {row.KDWILAYAH}
                            </TableCell>
                            <TableCell align="right">{row.E}</TableCell>
                            <TableCell align="right">{row.G}</TableCell>
                            <TableCell align="right">{row.I}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </section>
              <h2 className="content-title">Statistics</h2>
              <h5 className="content-desc mb-4">Your business growth</h5>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="statistics-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <h5 className="content-desc">Data Uploaded</h5>
                      <h3 className="statistics-value">18,500,000</h3>
                    </div>
                    <button
                      className="btn-statistics"
                      onClick={() => {
                        console.log(periodeLpe.toString());
                      }}
                    >
                      <img src="../assets/img/global/times.svg" alt="" />
                    </button>
                  </div>
                  <div className="statistics-list">
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
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="statistics-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <h5 className="content-desc">Report Reserved</h5>
                      <h3 className="statistics-value">122,000</h3>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/times.svg" alt="" />
                    </button>
                  </div>
                  <div className="statistics-list">
                    <div className="statistics-icon award">
                      <img src="../assets/img/home/team/award.svg" alt="" />
                    </div>
                    <div className="statistics-icon globe">
                      <img src="../assets/img/home/team/globe.svg" alt="" />
                    </div>
                    <div className="statistics-icon target">
                      <img src="../assets/img/home/team/target.svg" alt="" />
                    </div>
                    <div className="statistics-icon box">
                      <img src="../assets/img/home/team/box.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="statistics-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <h5 className="content-desc">Projects</h5>
                      <h3 className="statistics-value">150,000,000</h3>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/times.svg" alt="" />
                    </button>
                  </div>
                  <div className="statistics-list">
                    <div className="statistics-icon one">
                      <span>SK</span>
                    </div>
                    <div className="statistics-icon two">
                      <span>DW</span>
                    </div>
                    <div className="statistics-icon three">
                      <span>FJ</span>
                    </div>
                    <div className="statistics-icon four">
                      <span>AP</span>
                    </div>
                    <div className="statistics-icon five">
                      <span>ML</span>
                    </div>
                    {/* <img src="../assets/img/home/icon-1.png" alt=""><img src="../assets/img/home/icon-2.png" alt=""><img src="../assets/img/home/icon-3.png" alt=""><img src="../assets/img/home/icon-4.png" alt=""><img src="../assets/img/home/icon-5.png" alt=""> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-lg-6">
                <h2 className="content-title">Documents</h2>
                <h5 className="content-desc mb-4">Standard procedure</h5>
                <div className="document-card">
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="document-icon box">
                        <img
                          src="../assets/img/home/document/archive.svg"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Customer Guide</h2>
                        <span className="document-desc">180 MB • PDF</span>
                      </div>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/download.svg" alt="" />
                    </button>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="document-icon globe">
                        <img
                          src="../assets/img/home/document/twitch.svg"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Twitch Record</h2>
                        <span className="document-desc">700 GB • MP4</span>
                      </div>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/download.svg" alt="" />
                    </button>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="document-icon database">
                        <img
                          src="../assets/img/home/document/database.svg"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Personas Datasets</h2>
                        <span className="document-desc">11 MB • CSV</span>
                      </div>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/download.svg" alt="" />
                    </button>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="document-icon target">
                        <img
                          src="../assets/img/home/document/book-open.svg"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Marketing Book</h2>
                        <span className="document-desc">891 MB • PDF</span>
                      </div>
                    </div>
                    <button className="btn-statistics">
                      <img src="../assets/img/global/download.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="content-title">History</h2>
                <h5 className="content-desc mb-4">Track the flow</h5>
                <div className="document-card">
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        className="document-icon"
                        src="../assets/img/home/history/photo.png"
                        alt=""
                      />
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Amalia Syahrina</h2>
                        <span className="document-desc">
                          Promoted to Sr. Website Designer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        className="document-icon"
                        src="../assets/img/home/history/photo-1.png"
                        alt=""
                      />
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Ah Park Yo</h2>
                        <span className="document-desc">
                          Promoted to Front-End Developer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        className="document-icon"
                        src="../assets/img/home/history/photo-2.png"
                        alt=""
                      />
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Sintia Siny</h2>
                        <span className="document-desc">
                          Promoted to Accounting Executive
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="document-item">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        className="document-icon"
                        src="../assets/img/home/history/photo-3.png"
                        alt=""
                      />
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <h2 className="document-title">Jerami Putu</h2>
                        <span className="document-desc">
                          Promoted to Quality Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
