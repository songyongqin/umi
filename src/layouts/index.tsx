import { IRouteComponentProps, Redirect } from 'umi';
import { getCache } from '@/utils/cache';
import { USER_CACHE } from '@/constants/index';
import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import getAppConfig from '@/utils/getAppConfig';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  let user = getCache(USER_CACHE);

  //如果路由为/login 或者 404 直接返回，让页面不受Head影响
  if (location.pathname === '/login' || location.pathname === '/404') {
    return children;
  }

  //如果缓存中没有user信息，直接返回到user页面
  if (location.pathname !== '/login' && !user) {
    return <Redirect to="/login" />;
  }

  //如果已经登录，进去未注册的路由返回404
  let routes: any = [];
  route.routes?.map((el: any) => {
    routes.push(el.path);
  });

  if (!routes.includes(location.pathname)) {
    return <Redirect to="/404" />;
  }

  let appConfig = getAppConfig();
  console.log(appConfig);

  let hideArr = ['/user'];
  route.routes = route.routes?.filter((el: any) => !hideArr.includes(el.path));

  return (
    <>
      <Header />
      {children}
    </>
  );
}
