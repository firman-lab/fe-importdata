import React, { useState } from "react";
import * as XLSX from "xlsx";
import { addData, addListInOutBulanan } from "../../services/import";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { activeStepRec, TransInOutBulananRec } from "../../store";
import { useRecoilState } from "recoil";
import ButtonInsert from "../Atom/ButtonInsert";

interface ActiveStepProps{
  steplength : number;
}
export default function ListTransBulanan(prop : ActiveStepProps) {
  const { steplength } = prop;
  const [items, setItems] = useRecoilState(TransInOutBulananRec);
  const [activeStep, setActiveStep] = useRecoilState(activeStepRec);


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

        const wsname = wb.SheetNames[7];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);
        console.log(data);
        resolve(data);
      };
      fileReader.onerror = (e: any) => {
        reject(e);
      };
    });
    promise.then((d: any) => {
      setItems(d);
    });
  };

  const load = async () => {
    const arr = items.map(Object.values);
    console.log(items);
    if (!arr.length) {
      alert("no data!");
    } else {
      const response = await addListInOutBulanan(arr);
      if (response.error) {
        alert("error gais");
        console.log("erroorrr");
      } else {
        alert(response.message);
        console.log("success");
      }
    }
  };

  const handleNext = () => {
    setActiveStep(() => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(() => activeStep - 1);
  };

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card-body">
              <div className="text-center">
                <h2>Import Data Transaksi Masuk Keluar Bulanan</h2>
                <h3>Select .xlsx file</h3>
              </div>
              <div className="mt-3 p-2 d-flex justify-content-center align-items-center">
                <div className="card-upload">
                  <input
                    className="text-center pt-3 pe-2 pb-3 ps-2"
                    type="file"
                    accept=".xlsx"
                    onChange={(e: any) => {
                      if (e.target != null) {
                        const file = e.target.files[0]!;
                        readExcel(file);
                      } else {
                        alert("pilih file xlsx duls!");
                      }
                    }}
                  />
                </div>
                <div className="ms-3">
                  <ButtonInsert onclick={load} />
                </div>
              </div>
              <section className="mt-3">
                <div className="card p-2">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">No.</TableCell>
                          <TableCell align="center">KODE</TableCell>
                          <TableCell align="center">URAIAN</TableCell>
                          <TableCell align="center">AKUN</TableCell>
                          <TableCell align="center">URAIAN AKUN</TableCell>
                          <TableCell align="center">TRANSFER KELUAR</TableCell>
                          <TableCell align="center">KODE MASUK</TableCell>
                          <TableCell align="center">URAIAN MASUK</TableCell>
                          <TableCell align="center">TRANSFER MASUK</TableCell>
                          <TableCell align="center">SELISIH</TableCell>
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
                            <TableCell align="center">
                              {(index + 1).toString()}
                            </TableCell>
                            <TableCell
                              component="th"
                              scope="row"
                              align="center"
                            >
                              {row.Kode}
                            </TableCell>
                            <TableCell align="left">
                              {row.Uraian}
                            </TableCell>
                            <TableCell align="center">{row["Kode Akun"]}</TableCell>
                            <TableCell align="left">{row["Uraian Akun"]}</TableCell>
                            <TableCell align="center">{row["Transfer Keluar"]}</TableCell>
                            <TableCell align="center">{row["Kode Masuk"]}</TableCell>
                            <TableCell align="left">{row["Uraian Masuk"]}</TableCell>
                            <TableCell align="center">{row["Transfer Masuk"]}</TableCell>
                            <TableCell align="center">{row.Selisih}</TableCell>                            
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </section>
              <section>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {/* {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )} */}
                  <Button onClick={handleNext}>
                    {activeStep === steplength- 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

