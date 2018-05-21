import { stringify } from 'qs';
import request from '../utils/request';

export async function getList(params) {
  return request(`/list?${stringify(params)}`, {
    method: 'GET',
  });
}
