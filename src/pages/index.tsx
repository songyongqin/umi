import React,{useState,useEffect} from 'react';
import styles from './index.less';
import request from '@/utils/request';

export default () => {

  const getData = () => {
    request
    .get('/api/users')
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
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
