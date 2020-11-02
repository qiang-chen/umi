/**
 * @description 
 * @author cq
 * @Date 2020-10-30 16:37:31
 * @LastEditTime 2020-11-02 14:40:24
 * @LastEditors cq
 */
import React, { useEffect } from 'react';
import { history } from 'umi';
let arr = [{
  "subject": {
    "code": "SUBJECT01",
    "codeDesc": "语文"
  },
  "count": 4,
  "diagnosePercent": 20
}, {
  "subject": {
    "code": "SUBJECT02",
    "codeDesc": "数学"
  },
  "count": 0,
  "diagnosePercent": 0
}, {
  "subject": {
    "code": "SUBJECT03",
    "codeDesc": "英语"
  },
  "count": 0,
  "diagnosePercent": 0
}, {
  "subject": {
    "code": "SUBJECT04",
    "codeDesc": "历史"
  },
  "count": 0,
  "diagnosePercent": 0
}, {
  "subject": {
    "code": "SUBJECT05",
    "codeDesc": "地理"
  },
  "count": 11,
  "diagnosePercent": 14
}, {
  "subject": {
    "code": "SUBJECT11",
    "codeDesc": "道德与法治"
  },
  "count": 0,
  "diagnosePercent": 0
}, {
  "subject": {
    "code": "SUBJECT07",
    "codeDesc": "生物"
  },
  "count": 0,
  "diagnosePercent": 0
}, {
  "subject": {
    "code": "SUBJECT08",
    "codeDesc": "化学"
  },
  "count": 0,
  "diagnosePercent": 0
}, {
  "subject": {
    "code": "SUBJECT09",
    "codeDesc": "物理"
  },
  "count": 0,
  "diagnosePercent": 0
}]
export default () => {
  useEffect(() => {
    
    let abc = arr.reduce((pre, cur) => {
      const opj = {
        value: cur.diagnosePercent,
        name: cur.subject && cur.subject.codeDesc
      }
      cur.count && pre.push(opj)
      return pre;
    }, [] as any)
    console.log(abc);
  }, [])
  // 跳转测试页面
  const handClick=()=>{
    history.push({
      pathname: '/testPage',
      query: {
        id: '主页',
      },
    });
  }
  const handFetch=()=>{
    fetch("/api/users")
    fetch("/api/home")
  }
  return (
    <div>
      <h1>home index</h1>
      <button onClick={handClick}>
        点击跳转测试页面
      </button>
      <button onClick={handFetch}>
        请求mock
      </button>
    </div>
  );
}
