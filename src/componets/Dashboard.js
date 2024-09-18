import Commondailog from './commondailog'
import { Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import  {changedailog,pushUser}  from '../state-manager/commondata';
import { red } from '@mui/material/colors';


export default function Dashboard() {

  const util = useSelector((state)=> state.util)
  const dispatch = useDispatch()
  console.log(util)
  const [state1, setvalue] = useState(false)
  let str1 = "open"

  function opencommondailog() {
    let obj = {}
    obj.flag = true
    obj.key = "commondailog"
    dispatch(changedailog(obj))

    
  }

  return (
    <div className="login-button">
       {util.commondailog == true &&<Commondailog  action={util.commondailog} />}
      <Button style={{color:red}} variant="contained" onClick={()=>opencommondailog()}>{str1}</Button>
    </div>
  )
}
