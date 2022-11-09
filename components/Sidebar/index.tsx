import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { sidebarShow } from "../../store";
import MenuItem from "./MenuItem";
interface SidebarProps {
  activeMenu: "dash" | "lo" | "lpe" | "ln" | "lra" | "setting";
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;

  const [show, setShow] = useRecoilState(sidebarShow);

  return (
    <aside className="sidebar">
      {/* <a href="#" className="sidebar-logo"> */}
        <div className="d-flex justify-content-center align-items-center">
          <Image
            src="/assets/icon/tni-al.png"
            alt="logo"
            width={100}
            height={100}
          />
          {/* <span>FAST</span> */}
          <button id="toggle-navbar" className="ps-2" onClick={() => {setShow(false);}}>
            <Image
              src="/assets/img/global/navbar-times.svg"
              alt=""
              height={24}
              width={24}
            />
          </button>
        </div>
      {/* </a> */}
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
        href="#"
        icon="bxs-cube-alt"
      />
    </aside>
  );
}
