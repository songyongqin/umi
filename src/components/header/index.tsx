import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import request from '@/utils/request';
import { getCache, removeCache } from '@/utils/cache';
import { lastUrl, token, USER_CACHE } from '@/constants';
import styles from './index.less';

const Header = (props: any) => {
  const toLogin = () => {
    removeCache(USER_CACHE);
    history.push('/login');
  };

  const updateUser = () => {
    sessionStorage.setItem('test', 'testUpdate');
  };

  return (
    <div className={styles['head']}>
      <div>umi大本营</div>
      <div>
        {sessionStorage.getItem('test')
          ? sessionStorage.getItem('test')
          : 'test'}
      </div>
      <div className={styles['content']}>welcome to umi</div>
      <div className={styles['right']}>
        <Button onClick={toLogin}>登出</Button>
        <Button onClick={updateUser}>修改</Button>
      </div>
    </div>
  );
};

export default Header;
