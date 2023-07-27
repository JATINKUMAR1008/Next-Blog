import React from "react";
import variables from "@/styles/variables.module.scss";
import Image from "next/image";
import landingImg from "@/assets/hero_img.jpg";
import buttons from '@/styles/buttons.module.scss'
import logoImg from "@/assets/logo.png";
import n_img from '@/assets/icons8-notion.svg'
import b_img from '@/assets/icons8-blogger.svg'
import s_img from '@/assets/icons8-squarespace.svg'
import t_img from '@/assets/icons8-twitter.svg'
import { useRouter } from "next/router";
const Hero = () => {
  const router = useRouter();
  return (
    <div className={variables.hero}>
      <div className={variables.hero_header}>
        <img className={variables.logo_img} src={logoImg.src} />
      </div>
      <div className={variables.hero_content}>
        
        <h1>Explore the new self through Blogs.</h1>
        <p>
          Blogs is a online platform where you can read or write your thoughts
          on new trends in world.
        </p>
        <ul>
          <li>Add Your own blogs.</li>
          <li>Leave reviews and expericences.</li>
          <li>Read all you can.</li>
        </ul>
        <button onClick={()=>router.push("/content")} className={buttons.btn_primary}>View contents</button>
        <p>Partnered with:</p>
        <span className={variables.h_cont_partners}>
          <img src={n_img.src} className={variables.p_img}/>
          <img src={b_img.src} className={variables.p_img}/>
          <img src={s_img.src} className={variables.p_img}/>
          <img src={t_img.src} className={variables.p_img}/>
        </span>
      </div>

      <img src={landingImg.src} alt="name" className={variables.hero_img} />
    </div>
  );
};

export default Hero;
