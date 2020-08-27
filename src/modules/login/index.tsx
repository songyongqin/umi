import React,{useState,useEffect} from 'react';
import {Button} from 'antd'
import { history } from 'umi';
import request from '@/utils/request';

const Login = (props:any) => {

  const login = ()=> {
  request
    .get('/api/login?id=1')
    .then(function(response) {
      localStorage.setItem("isLogin",'true')
      history.push('/user');
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  return (
    <div>
      <span>login page</span>
      <Button onClick={login}>login</Button>
    </div>
  )
}

export default Login;