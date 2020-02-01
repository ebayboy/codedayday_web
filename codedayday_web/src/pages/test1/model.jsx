import * as test1Api from './service';
 
export default {
  namespace: 'test1',
  state: {
 
  },
 
  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(test1Api.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },
 
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
 
};
