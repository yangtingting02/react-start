//admin控制菜单是否仅管理员可见
export const menu = [
  {
    id: 1,
    name: 'Dashboard',
    route: '/',
    icon: 'home',
  },
  {
    id: 2,
    bpid: 1,
    name: '列表',
    icon: 'table',
  },
  {
    id: 21,
    bpid: 2,
    mpid: 2,
    name: '列表一',
    route: '/list/job-list',
    icon: 'bars',
  },
  {
    id: 22,
    bpid: 2,
    mpid: 2,
    name: '列表二',
    route: '/list/list2',
    icon: 'rocket',
    admin: true,
  },
];
