import React, { useState } from "react";
import variables from "@/styles/variables.module.scss";
import buttons from "@/styles/buttons.module.scss";
import logoImg from "../assets/logo.png";
import menubar from "../assets/icons8-menu.svg";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { logOut } from "@/redux/features/auth-slice";


export default function Navbar({handleClick}) {
  const [open, setOpen] = useState(false);
  const router= useRouter()
  const name = useAppSelector((state)=>state.authReducer.value.name)
  const user = useAppSelector((state)=>state.authReducer.value.user)
  const dispatch = useDispatch()
  const LogOut = () =>{
    console.log("user",Object.keys(user).length)
    console.log('logout')
    dispatch(logOut())
  }
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
              {!Object.keys(user).length?<></>:<li onClick={()=>router.push('/account') } className={variables.fourth}>{user.name}</li>}
              {!Object.keys(user).length?<li onClick={()=> router.push('/login')}>Login</li>:<>
              <span className={variables.header_account} onClick={()=> router.push(`/account/${user._id}`)}>
                <img src={user.img}/>
                <span>
                  {name}
                </span>
              </span>
              </>}
            </ul>
            {!Object.keys(user).length?<button onClick={()=>router.push('/register')} className={buttons.btn_primary}>Create an account </button>:<button onClick={LogOut} className={buttons.btn_primary}>SignOut</button>}
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
              {!Object.keys(user).length?<></>:<li className={variables.fourth} onClick={()=> router.push('/login')}>{user.name}</li>}
              {!Object.keys(user).length?<li onClick={()=> router.push('/login')}>Login</li>:<>
              <span className={variables.header_account} onClick={()=> router.push(`/account/${user._id}`)}>
                <img src={user.img}/>
                <span>
                  {name}
                </span>
              </span></>}
              
        </ul>
        {!Object.keys(user).length?<button onClick={()=>router.push('/register')} className={buttons.btn_primary}>Create an account </button>:<button onClick={LogOut} className={buttons.btn_primary}>SignOut</button>}
      </nav>
      
      </header>
    </>
  );
}
