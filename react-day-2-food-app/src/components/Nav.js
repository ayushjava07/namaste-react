import { LOGO_URL } from "../utils/constant";
const Nav=()=>{
  return(
  <div className="Nav">
    <div className="NavImg">
      <img alt="applogo" src={LOGO_URL}/>
    </div>
    <div  className="NavElem">
      <a href="#"> HOME</a>
      <a href="#"> ABOUT US</a>
      <a href="#"> CONTACT</a>
      <a href="#"> SIGN IN</a>

    </div>
  </div>
)}
export default Nav;