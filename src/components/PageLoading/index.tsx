/**
 * @description
 * @author cq
 * @Date 2020-11-03 10:36:09
 * @LastEditTime 2020-11-03 10:36:20
 * @LastEditors cq
 */
import React from 'react';
import { Spin } from 'antd';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" />
  </div>
);
