import React, { useState } from "react";
import variables from "@/styles/variables.module.scss";
import buttons from "@/styles/buttons.module.scss";
import logoImg from "../assets/logo.png";
import menubar from "../assets/icons8-menu.svg";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={variables.header}>
        <div className={variables.header_cont}>
          <img src={logoImg.src} className={variables.header_img} />

          <nav>
            <ul>
              <li>Home</li>
              <li>Trending</li>
              <li>Create</li>
              <li>Login</li>
            </ul>
            <button className={buttons.btn_primary}>Create an account </button>
          </nav>
          <div
            className={variables.btn_menu}
            title="menu button"
            onClick={() => setOpen(!open)}
          >
            <img src={menubar.src} alt="" />
          </div>
        </div>
      <nav
        className={`${variables.nav_collapsable} ${
          open ? `${variables.active}` : `${variables.hidden}`
        }`}
      >
        <ul>
          <li>Home</li>
          <li>Trending</li>
          <li>Create</li>
          <li>Login</li>
        </ul>
        <button className={buttons.btn_primary}>Create an account </button>
      </nav>
      </header>
    </>
  );
}
