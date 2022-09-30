import Image from 'next/image';
import React from 'react';
import MenuItem from './MenuItem';
interface SidebarProps{
  activeMenu :
  | "dash"
  | "lo"
  | "lpe"
  | "ln"
  | "lra"
  | "setting";
}

export default function Sidebar(props:SidebarProps) {
  const { activeMenu } = props;

  return (
    <aside className="sidebar">
      <a href="#" className="sidebar-logo">
        <div className="d-flex justify-content-start align-items-center">
          <Image src="/assets/icon/kemenhan.png" alt="logo" width={100} height={100} />
          <span>FAST</span>
        </div>
      </a>
      <h5 className="sidebar-title">Dashboard</h5>
      <MenuItem
        title="Main"
        active={activeMenu === "dash"}
        href="/"
        icon="bxs-dashboard"
      />
      <h5 className="sidebar-title">Convert Data Laporan</h5>
      <MenuItem
        title="Operasional"
        active={activeMenu === "lo"}
        href="/operasional"
        icon="bxs-cube-alt"
      />
      <MenuItem
        title="Perubahan Ekuitas"
        active={activeMenu === "lpe"}
        href="/perubahan-ekuitas"
        icon="bxs-cube-alt"
      />
      <MenuItem
        title="Neraca"
        active={activeMenu === "ln"}
        href="/neraca"
        icon="bxs-cube-alt"
      />
      <MenuItem
        title="Realisasi Anggaran"
        active={activeMenu === "lra"}
        href="/realisasi-anggaran"
        icon="bxs-cube-alt"
      />
      <h5 className="sidebar-title">Others</h5>
      <MenuItem
        title="Setting"
        active={activeMenu === "setting"}
        href="/classified"
        icon="bxs-cube-alt"
      />
    </aside>
  );
}
