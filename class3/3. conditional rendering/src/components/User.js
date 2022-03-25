import React, { useState } from "react";

const User = () => {
  const [loginStatus, setLoginStatus] = useState(true);

  // return(
  //     <div>
  //         <h1>Welcome Guest</h1>
  //         <h1>Welcome Mark</h1>
  //     </div>
  // )

  // 1st Option: if-else
  // if(loginStatus){
  //     return <h1>Welcome Mark</h1>
  // }else{
  //     return <h1>Welcome Guest</h1>
  // }

  // // 2nd Option: element value
  // let response;
  // if(loginStatus){
  //     response = <h1>Welcome Mark</h1>
  // }else{
  //     response = <h1>Welcome Guest</h1>
  // }
  // return <div>{ response }</div>

  // 3rd Option: turney opeartor
  //return loginStatus ? <h1>Welcome Mark</h1> : <h1>Welcome Guest</h1>

  //4th Option : Circuit breaker
  //return loginStatus && <h1>Welcome Mark</h1>
  //return !loginStatus && <h1>Welcome Guest</h1>

  // return (
  //     <div>
  //         <button className="btn btn-primary">Login</button>
  //         <button className="btn btn-danger">Logout</button>
  //     </div>
  // )

  return loginStatus ? (
    <button className="btn btn-danger">Logout</button>
  ) : (
    <button className="btn btn-primary">Login</button>
  );
};
export default User;
