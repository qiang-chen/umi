/**
 * @description 
 * @author cq
 * @Date 2020-11-02 14:39:30
 * @LastEditTime 2020-11-02 14:40:14
 * @LastEditors cq
 */
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },
  // GET 可忽略
  '/api/home': { id: 1 },
  // 支持自定义函数，API 参考 express@4
  }