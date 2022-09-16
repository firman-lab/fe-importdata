import React from 'react';
import MenuItem from './MenuItem';
interface SidebarProps{
  activeMenu :
  | "dash"
  | "lo"
  | "lpe"
  | "result"
  | "setting";
}

export default function Sidebar(props:SidebarProps) {
  const { activeMenu } = props;

  return (
    <aside className="sidebar">
      <a href="#" className="sidebar-logo">
        <div className="d-flex justify-content-start align-items-center">
          <img src="../assets/img/global/logo.svg" alt="" />
          <span>FIST</span>
        </div>
      </a>
      <h5 className="sidebar-title">Import Data</h5>
      <MenuItem
        title="Main"
        active={activeMenu === "dash"}
        href="/"
        icon="bxs-dashboard"
      />
      <h5 className="sidebar-title">Scope Data</h5>
      <MenuItem
        title="Lap. Operasional"
        active={activeMenu === "lo"}
        href="/convert-data"
        icon="bxs-cube-alt"
      />
      <MenuItem
        title="Lap. Perubahan Ekuitas"
        active={activeMenu === "lpe"}
        href="/perubahan-ekuitas"
        icon="bxs-cube-alt"
      />
      <MenuItem
        title="Result"
        active={activeMenu === "result"}
        href="/classified"
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
