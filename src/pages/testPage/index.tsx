/**
 * @description 测试页面
 * @author cq
 * @Date 2020-10-30 16:37:31
 * @LastEditTime 2020-10-30 19:34:47
 * @LastEditors cq
 */
import React, { useEffect } from 'react';
export default (props:any) => {
  console.log(props);
  // match，当前路由和 url match 后的对象，包含 params、path、url 和 isExact 属性
  // location，表示应用当前出于哪个位置，包含 pathname、search、query 等属性
  // history，同 api#history 接口
  // route，当前路由配置，包含 path、exact、component、routes 等
  // routes，全部路由信息
  return (
    <div>
      <h1>login index</h1>
    </div>
  );
}
