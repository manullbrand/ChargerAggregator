import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import user from "../images/user.png";
import mycar from "../images/mycar.png";
import booking from "../images/booking.png";
import charging from "../images/charging.png";
import searchicon from"../images/searchicon.png";
import homeicon from "../images/homeicon.png";
import line from "../images/line.png";
import gps from "../images/gps.png";
import "./MainScreenCss.css";

export default function MainScreen(){
  return(
    // Version 1, page is not responsive. Need to include @media or migrate to complete bootstrap components 
    <div className="frontpage">
      <div className="mainscreen"  style={{'display':'flex','flexDirection':'row','justifyContent':'spaceBetween','alignItems':'center','margin':'5px','marginBottom':'10px'}}>
        <h3 className="h3" style={{'marginRight':'auto'}}>LOGO HERE</h3>
          <div className="user">
            <div className="userbtn" style={{'display':'flex','flexDirection':'column','alignItems':'center'}}>
              <button className="userlogin"><img src={user} style={{'width':'30px','marginLeft':'auto'}}/></button>
              <h5 className="h8" style={{'margin':'0px','color':'#00513A'}}>Log In</h5>
            </div>
         </div>
       </div>
      
      <div className="booking" style={{'margin':'0px 50px'}}>

        <div className="bookingLinks" style={{'display':'flex','flexDirection':'row','justifyContent':'space-between','alignItems':'center','padding':'0 2rem'}}>

            <div className="ridebtn" style={{'display':'flex','flexDirection':'column','alignItems':'center'}}>
                    <img src={mycar} className="img-fluid" style={{'width':'52px'}} alt="ride" />
                    <a href="https://www.google.com" style={{'textDecoration':'none'}}>Ride</a>
            </div>

            <div className="bookingbtn" style={{'display':'flex','flexDirection':'column','alignItems':'center'}}>
                <img src={booking} className="img-fluid" style={{'width':'52px'}} alt="booking" />
                <a href="https://www.google.com" style={{'textDecoration':'none'}}>Booking</a>
            </div>

            <div className="bookingbtn" style={{'display':'flex','flexDirection':'column','alignItems':'center'}}>
                <img src={charging} className="img-fluid" style={{'width':'52px','marginBottom':'21px'}} alt="booking"  />
                <a href="https://www.google.com" style={{'textDecoration':'none'}}>Charging</a>
            </div>
        </div>

        <div className="btn-group" style={{ width: '100%','display':'flex','justifyContent':'space-between'}}>
          <button className="btn btn-primary dropdown-toggle"
            style={{ width: '100%', borderRadius: '8px','backgroundColor':'#00513A', 'margin':'2rem 0' }}
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={searchicon} alt="" style={{'width':'30px'}}/>
            Charging Station
          </button>
          <ul className="dropdown-menu">
            <li className="active show">
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </ul>
        </div>
        <div className="laststation" style={{'display':'flex','flexDirection':'column','color':'#00513A','padding':'1em'}}>
          <div>
            <p style={{'color':'#00513A','margin':'0'}}><img src={homeicon} style={{'marginRight':'1rem'}} />Last used stations</p>
            <img src={line} />
          </div>
          <div>
            <p style={{'color':'#00513A','margin':'0'}}><img src={homeicon} style={{'marginRight':'1rem'}} />Last used stations</p>
            <img src={line} />
          </div>
        </div>
        <img className="img-fluid" src={gps} style={{'padding':'1rem'}} /> {/* Replace with React-leaflet component later*/}
        <button className="btn btn-primary" style={{ width: '100%', borderRadius: '8px','backgroundColor':'#00513A', 'margin':'2rem 0' }}>Find me a charging station</button>
      </div>
    </div>
  )
}