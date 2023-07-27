import React from "react";
import variables from "../styles/variables.module.scss";
import buttons from "../styles/buttons.module.scss";
import SearchImg from "../assets/icons8-search.svg";
const SearchBox = () => {
  return (
    <div className={variables.search_container}>
      <div className={variables.search_content_container}>
        <h1>Welcome to Blog!</h1>
        <p>
          View our hand-picked Blogs from all over the world, or add your own.
        </p>
        <div className={variables.search_box_container}>
          <span className={variables.search_box}>
            <img src={SearchImg.src}/>
            <input type="text" placeholder="Search"/>
          </span>
          <button className={buttons.btn_primary}>
            Search
          </button>
        </div>
        <p className={variables.p_link}>
          or add your own blog?
        </p>
      </div>
    </div>
  );
};

export default SearchBox;
