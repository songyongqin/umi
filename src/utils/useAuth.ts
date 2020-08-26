
const useAuth = () => {
  let obj = {isLogin:false}
  let flag = localStorage.getItem("isLogin")
  if(flag === "true") {
    obj = {isLogin:true}
  } else {
    obj = {isLogin:false}
  }
  return obj
};

export default useAuth;