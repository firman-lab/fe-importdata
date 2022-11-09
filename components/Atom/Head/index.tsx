import Head from "next/head";
import React from "react";

interface HeadProps {
    title : string;
}
export default function Heads(props : HeadProps) {
    const { title } = props
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
