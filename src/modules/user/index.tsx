import React,{useState,useEffect} from 'react';
import {Button} from 'antd'
import request from '@/utils/request';

const User = () => {

  const getData = () => {
    request
    .get('/api/user')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <span>user</span>
      <Button>User</Button>
    </div>
  )
}
User.wrappers = ['@/wrappers/auth']

export default User

// const User = () => {
//   return (
//     <div>user</div>
//   )
// }

// export default User;