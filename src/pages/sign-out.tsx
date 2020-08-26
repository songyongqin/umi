import React,{useState,useEffect} from 'react';
import {Button} from 'antd'

const signOut = () => {
  const signOut = ()=> {
    localStorage.setItem("isLogin",'false')
  }
  return (
    <div>
      <span>signOut page</span>
      <Button onClick={signOut}>signOut</Button>
    </div>
  )
}

export default signOut;