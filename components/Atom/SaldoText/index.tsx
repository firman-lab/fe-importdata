import React from "react";
import { NumericFormat } from 'react-number-format';

interface SaldoProps {
  value: number;
}
export default function SaldoText(props: SaldoProps) {
  const { value } = props;
  return (
    <NumericFormat
      value={value}
      inputMode="numeric"
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
    //   prefix="Rp "
    />
  );
}
