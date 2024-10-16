import React, { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Auth from "./auth";
const image1 = require("../assets/dashboard_logo.png");


 function Dashboard() {
  const userdetail = useSelector((state) => state.commmon);
  const dispatch = useDispatch();
  console.log(userdetail);
 

  // function opencommondailog() {
  //   let obj = {}
  //   obj.flag = true
  //   obj.key = "commondailog"
  //   dispatch(changedailog(obj))
  // }

  // return (
  //   <div className="login-button">
  //      {util.commondailog == true &&<Commondailog  action={util.commondailog} />}
  //     <Button style={{color:red}} variant="contained" onClick={()=>opencommondailog()}>{str1}</Button>
  //   </div>
  // )

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <span>
              <img className="dashboard-logo" src={image1} alt="logo" />
            </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-auto px-5">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-auto px-5">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item dropdown mx-auto px-5">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Movies booking
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Barcode Printing
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Customized Mobile App Services
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
              <button className="btn" type="submit">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>{userdetail.userdetails.name.charAt(0).toUpperCase()}</Avatar>
              </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Auth(Dashboard)
