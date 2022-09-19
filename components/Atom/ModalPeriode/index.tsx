import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { periodLPE } from '../../../store'
import ButtonInsert from '../ButtonInsert'

export default function ModalPeriode() {
  const [lpe, setlpe] = useRecoilState(periodLPE);
  const [bulan, setBulan] = useState("");
  const [dari, setDari] = useState("");
  const [sampai, setSampai] = useState("");

  const handleBulan = (e : any) => {
    const bulan = e;
    setBulan(bulan);
  }
  const handleDari = (e : any) => {
    const dari = e;
    setDari(dari);
  }
  const handleSampai = (e : any) => {
    const sampai = e;
    setSampai(sampai);
  }

  const setPeriode = () => {
    const rec = {
      bulan,
      dari,
      sampai,
    }
    setlpe(rec);
  }
  return (
    <div className='d-flex justify-content-center'>
      <Form.Group className="p-2">
        <Form.Label>Dimulai pada</Form.Label>
        <Form.Select 
          size="sm"
          onChange={(e : any) => {handleBulan(e)}}>
          <option value="Januari">Januari</option>
          <option value="Februari">Februari</option>
          <option value="Maret">Maret</option>
          <option value="April">April</option>
          <option value="Mei">Mei</option>
          <option value="Juni">Juni</option>
          <option value="Juli">Juli</option>
          <option value="Agustus">Agustus</option>
          <option value="September">September</option>
          <option value="Oktober">Oktober</option>
          <option value="November">November</option>
          <option value="Desember">Desember</option>
        </Form.Select>
        <Form.Label className="mt-2">Dari Tahun</Form.Label>
        <Form.Select size="sm" onChange={(e : any) => {handleDari(e)}}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </Form.Select>
        <Form.Label className="mt-2">Hingga Tahun</Form.Label>
        <Form.Select size="sm" className="mb-4" onChange={(e) => {handleSampai(e)}}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </Form.Select>
      <ButtonInsert
        title="Set Periode"
        onclick={()=>{setPeriode}}
      />
      </Form.Group>
    </div>
  )
}
