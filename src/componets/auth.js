import React from "react";
import Errorpage from "../pages/errorpage";

export default function Auth(Component) {
  debugger;
  let flag =  sessionStorage.getItem("isloggedin")
  return function () {
    if (flag) {
      return <Component />;
    } else {
      return <Errorpage />;
    }
  };
}

