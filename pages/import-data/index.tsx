import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ERekonPendapatan from "../../components/ERekonPendapatan";
import ERekonBelanja from "../../components/ERekonBelanja";
import { useRecoilState } from "recoil";
import { activeStepRec, TransInOutBulananRec } from "../../store";
import SaldoKasX from "../../components/SaldoKasX";
import SaldoKasXmin1 from "../../components/SaldoKasXmin1";
import ListTransBulanan from "../../components/ListingTransBulanan";
import SaldoAkrualX from "../../components/SaldoAkrualX";
import SaldoAkrualXmin1 from "../../components/SaldoAkrualXmin1";
import TransInOutBulanan from "../../components/TransInOutBulanan";

const steps = [
  "e-Rekon Pendapatan",
  "e-Rekon Belanja",
  "Saldo Kas X",
  "Saldo Kas X-1",
  "Saldo Akrual X",
  "Saldo Akrual X-1",
  "Listing Transaksi Bulanan",
  "Transfer Masuk Keluar Bulanan",
];

export default function ImportData() {
  const [activeStep, setActiveStep] = useRecoilState(activeStepRec);

  // const [skipped, setSkipped] = React.useState(new Set<number>());

  // const isStepOptional = (step: number) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step: number) => {
  //   return skipped.has(step);
  // };

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="vh-100">
      <div className=""></div>
      <Box
        sx={{
          width: "100%",
          padding: "10px",
        }}
      >
        <div className="p-2">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              //   if (isStepOptional(index)) {
              //     labelProps.optional = (
              //       <Typography variant="caption">Optional</Typography>
              //     );
              //   }
              //   if (isStepSkipped(index)) {
              //     stepProps.completed = false;
              //   }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        {activeStep === steps.length ? (
          <React.Fragment>
            <div className="text-center m-5">
              All steps completed - you&apos;re finished
            </div>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {activeStep === 0 ? (
              <ERekonPendapatan steplength={steps.length} />
            ) : activeStep === 1 ? (
              <ERekonBelanja steplength={steps.length} />
            ) : activeStep === 2 ? (
              <SaldoKasX steplength={steps.length} />
            ) : activeStep === 3 ? (
              <SaldoKasXmin1 steplength={steps.length} />
            ) : activeStep === 4 ? (
              <SaldoAkrualX steplength={steps.length} />
            ) : activeStep === 5 ? (
              <SaldoAkrualXmin1 steplength={steps.length} />
            ) : activeStep === 6 ? (
              <ListTransBulanan steplength={steps.length} />
            ) : (<TransInOutBulanan steplength={steps.length}/>)}
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
