export default {
  namespace: 'dashboard',
  state: {
    title: 'Hello, Dashboard',
  },
  subscriptions: {
    setup({ history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          console.log('pathname', pathname);
        }
      });
    },
  },
  effects: {},
  reducers: {},
};
