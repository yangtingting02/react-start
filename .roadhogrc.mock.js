import mockjs from 'mockjs';
import { getList } from './mock/api';
import { format, delay } from 'roadhog-api-doc';


// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  'GET /list': mockjs.mock({
    code: 0,
    message: "success",
    data: getList
  }),
};

export default noProxy ? {} : delay(proxy, 1000);
