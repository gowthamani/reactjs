import React from 'react'
import { useDispatch, useSelector } from "react-redux";



export default function Auth(Component) {
    debugger
//   const util = useSelector((state) => state.util)
//   const dispatch = useDispatch()

let flag = true
  return function(){
    if(!flag){
        return <div>
        user not authenticated
        
    </div>
    }
    return <Component />
  }
}
