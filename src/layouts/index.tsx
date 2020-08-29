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
  let res = getAppConfig();

  let user = getCache(USER_CACHE);

  if (location.pathname === '/login' || location.pathname === '/404') {
    return children;
  }

  if (location.pathname !== '/login' && !user) {
    return <Redirect to="/login" />;
  }

  let routes: any = [];
  route.routes?.map((el: any) => {
    routes.push(el.path);
  });

  if (!routes.includes(location.pathname)) {
    return <Redirect to="/404" />;
  }

  let hideArr = ['/user'];
  route.routes = route.routes?.filter((el: any) => !hideArr.includes(el.path));

  return (
    <>
      <Header />
      {children}
    </>
  );
}
