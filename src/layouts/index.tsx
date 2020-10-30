/**
 * @description 
 * @author cq
 * @Date 2020-10-30 16:36:16
 * @LastEditTime 2020-10-30 17:03:43
 * @LastEditors cq
 */
import React from 'react';
// import styles from './index.less';

type LayoutsProps = {
  children: React.ReactNode
}

export default (props: LayoutsProps) => {
  return (
    <div>
      <h1>layouts</h1>
      {props.children}
    </div>
  );
}
