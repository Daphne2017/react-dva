import request from '../utils/request';

export function query() {
  return request('/api/users');
}
export function getProductApi(params) {
  return request('/api/product',{
    params
  });
}
export function getUserApi(body) {
  return request('/api/login',{
    body,
    method:'post'
  });
}
export function getPostApi(body) {
  return request('/api/posts',{
    body,
  });
}
