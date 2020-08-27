import { Redirect } from 'umi'
import React,{useState,useEffect} from 'react';
import useAuth from '@/utils/useAuth.ts';

export default (props:any) => {
  const { isLogin } = useAuth();
  console.log('执行')
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}