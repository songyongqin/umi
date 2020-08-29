import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { history, useModel } from 'umi';
import request from '@/utils/request';
import { getCache, removeCache } from '@/utils/cache';
import { lastUrl, token, USER_CACHE } from '@/constants';

const Login = (props: any) => {
  const { setUser } = useModel('useAuthModel', model => ({
    setUser: model.setUser,
  }));

  const login = () => {
    request
      .get('/api/login?id=1')
      .then(res => {
        setUser(res);
        let user = JSON.stringify(res);
        sessionStorage.setItem(USER_CACHE, user);
        let url = getCache(lastUrl) || '/msg';
        removeCache(lastUrl);
        history.push(url);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const manageLogin = () => {
    request
      .post('/api/login?id=1')
      .then(res => {
        let user = JSON.stringify(res);
        sessionStorage.setItem(USER_CACHE, user);
        let url = getCache(lastUrl) || '/msg';
        removeCache(lastUrl);
        history.push(url);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
      <span>login page</span>
      <Button onClick={login}>普通用户登录</Button>
      <Button onClick={manageLogin}>管理员登录</Button>
    </div>
  );
};

export default Login;
