import React from "react";
import Errorpage from "../pages/errorpage";

export default function Auth(Component) {
  return function () {
    if (sessionStorage.getItem("isloggedin") === 'true') {
      return <Component />;
    } else {
      return <Errorpage />;
    }
  };
}

