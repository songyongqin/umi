import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import request from '@/utils/request';
import { history } from 'umi';

const User = () => {
  const getData = () => {
    request
      .get('/api/user')
      .then(function(response) {})
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const toMsg = () => {
    history.push('/msg');
  };

  return (
    <div>
      <span>user</span>
      <Button onClick={toMsg}>to msg</Button>
    </div>
  );
};

export default User;
