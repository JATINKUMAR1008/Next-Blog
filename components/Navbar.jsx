import React, { useState } from "react";
import variables from "@/styles/variables.module.scss";
import buttons from "@/styles/buttons.module.scss";
import logoImg from "../assets/logo.png";
import menubar from "../assets/icons8-menu.svg";
import { useRouter } from "next/router";
export default function Navbar({handleClick}) {
  const [open, setOpen] = useState(false);
  const router= useRouter()
  return (
    <>
      <header className={variables.header}>
        <div className={variables.header_cont}>
          <img src={logoImg.src} className={variables.header_img} />

          <nav>
            <ul>
              <li onClick={()=> router.push('/content')}>Home</li>
              <li onClick={()=> router.push('/trending')}>Trending</li>
              <li onClick={()=> router.push('/create')}>Create</li>
              <li onClick={()=> router.push('/login')}>Login</li>
            </ul>
            <button onClick={handleClick} className={buttons.btn_primary}>Create an account </button>
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
        <li onClick={()=> router.push('/content')}>Home</li>
              <li onClick={()=> router.push('/trending')}>Trending</li>
              <li onClick={()=> router.push('/create')}>Create</li>
              <li onClick={()=> router.push('/login')}>Login</li>
        </ul>
        <button onClick={handleClick} className={buttons.btn_primary}>Create an account </button>
      </nav>
      </header>
    </>
  );
}
