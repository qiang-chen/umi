/**
 * @description 
 * @author cq
 * @Date 2020-10-30 19:03:05
 * @LastEditTime 2020-10-30 19:07:18
 * @LastEditors cq
 */
import React from 'react';
import { Redirect } from 'umi'

export default (props:any) => {
  // const { isLogin } = useAuth();
  const isLogin=true
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
