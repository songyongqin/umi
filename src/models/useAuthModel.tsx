import { useState, useCallback, useEffect } from 'react';
import { lastUrl, token, USER_CACHE } from '@/constants';
export default function useAuthModel() {
  const [user, setUser] = useState({ name: 'nick', age: 10 });
  const signin = useCallback((account, password) => {
    // signin implementation
    // setUser(user from signin API)
  }, []);
  const signout = useCallback(() => {
    // signout implementation
    // setUser(null)
  }, []);

  useEffect(() => {
    let userObj = JSON.stringify(user);
    sessionStorage.setItem(USER_CACHE, userObj);
  }, [user]);

  return {
    user,
    setUser,
    signin,
    signout,
  };
}
