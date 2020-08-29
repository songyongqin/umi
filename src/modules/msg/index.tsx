import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import request from '@/utils/request';
import { history, useModel } from 'umi';

const Msg = (props: any) => {
  const { user } = useModel('useAuthModel', model => ({ user: model.user }));

  const toUser = () => {
    history.push('/user');
  };

  const toSignOut = () => {
    history.push('/sign-out');
  };

  console.log(props, user);

  return (
    <div>
      <span>Msg</span>
      <Button onClick={toUser}>to user</Button>
    </div>
  );
};

export default Msg;
