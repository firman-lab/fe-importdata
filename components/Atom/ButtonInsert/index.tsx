import { Button } from "@mui/material";
import React from "react";

interface ButtonProps {
  onclick: () => void;
}

export default function ButtonInsert(props: ButtonProps) {
  const { onclick } = props;
  return <Button onClick={onclick}>Insert</Button>;
}
