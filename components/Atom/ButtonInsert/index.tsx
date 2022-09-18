import { Button } from "@mui/material";
import React from "react";

interface ButtonProps {
  onclick: () => void;
  title: string;
}

export default function ButtonInsert(props: ButtonProps) {
  const { onclick, title } = props;
  return <Button variant="outlined" onClick={onclick}>{title}</Button>;
}
