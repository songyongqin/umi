import { Redirect } from 'umi'
import React,{useState,useEffect} from 'react';
import useAuth from '@/utils/useAuth.ts';

export default (props:any) => {
  console.log(22)
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}