import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
const Nav=()=>{
  const[btntoggel,setbtntoggle]=useState("true");
  return(
  <div className="Nav">
    <div className="NavImg">
      <img alt="applogo" src={LOGO_URL}/>
    </div>
    <div  className="NavElem">
      <Link to={"/"}><p> HOME</p></Link> 
      <Link to={"/about"}><p> ABOUT</p></Link> 
      <Link to={"/"}><p> CONTACT</p></Link> 
      <button className="Signbtn" onClick={()=>{setbtntoggle(!btntoggel)}}><p>{btntoggel?"SIGN-IN":"SIGN-UP"}</p></button>

    </div>
  </div>
)}
export default Nav;