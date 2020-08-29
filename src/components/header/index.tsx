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

  return (
    <div className={styles['head']}>
      <div>umi大本营</div>
      <div className={styles['content']}>welcome to umi</div>
      <div className={styles['right']}>
        <Button onClick={toLogin}>登出</Button>
      </div>
    </div>
  );
};

export default Header;
