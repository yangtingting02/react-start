import { getList } from '../services/list';
import { errorNotification } from '../utils/notification';

export default {
  namespace: 'list',
  state: {
    list: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/list/job-list') {
          console.log('pathname', pathname);
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
  effects: {
    * query({ payload }, { call, put }) {
      const response = yield call(getList, payload);
      if (response) {
        const { data } = response;
        if (parseInt(data.code, 10) === 0) {
          yield put({
            type: 'querySuccess',
            payload: {
              list: data.data,
            },
          });
        } else {
          errorNotification(null, data.message);
        }
      }
    }
  },
  reducers: {
    querySuccess(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
