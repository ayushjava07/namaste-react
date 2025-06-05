import React from "react";
import ReactDOM from "react-dom/client"
//! -nav✅
//?   -logo ✅
//?   -nav-item✅
//! -body
//?   -search✅
//?   -card-container
//*      -cards
//! -footer
const Nav=()=>{
  return(
  <div className="Nav">
    <div className="NavImg">
      <img alt="applogo" src="https://i.pinimg.com/736x/a8/6e/7b/a86e7bccc052c3ee164afdff42577de5.jpg"/>
    </div>
    <div  className="NavElem">
      <a href="#"> HOME</a>
      <a href="#"> ABOUT US</a>
      <a href="#"> CONTACT</a>
      <a href="#"> SIGN IN</a>

    </div>
  </div>
)}
const Card=()=>{
  return(
    <div className="Card">
      <div className="Card-Img"><img src="https://b.zmtcdn.com/data/dish_photos/6a4/d2f25ea376d05329de6bccc31e2a76a4.jpg?fit=around|130:130&crop=130:130;*,*"/></div>
      <div className="Card-Items"> 
        <div className="L1"><h2>VEG BURGER</h2> <p>4.7⭐</p></div>
        <div className="L1"><h3>$20 FOR ONE</h3> <h3>16 MIN</h3></div>
       </div>
    </div>
  )
}
const Body=()=>{
  return (
    <div className="Body">
      <div className="Search">
        <div>search</div>
      </div>
      <div className="Card-Cnt">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>


      </div>
    </div>
  )
}





const App=()=>{
  return (
    <div className="App">
      <Nav/>
      <Body/>
    </div>
  );
}


const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<App/>)
