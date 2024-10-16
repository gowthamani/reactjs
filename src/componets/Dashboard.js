import React, { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
const image1 = require("../assets/dashboard_logo.png");


export default function Dashboard() {
  const util = useSelector((state) => state.util);
  const dispatch = useDispatch();
  console.log(util);

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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <span>
              <img className="dashboard-logo" src={image1} alt="logo" />
            </span>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item mx-auto px-5">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item mx-auto px-5">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item dropdown mx-auto px-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Movies booking
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Barcode Printing
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Customized Mobile App Services
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn" type="submit">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>G</Avatar>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
