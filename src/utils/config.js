console.log('app_env', APP_ENV);
const domains = {
  development: 'http://localhost:8000',
  alpha: 'http://alpha.xxx.com',
  production: 'http://xxx.com',
};

const loginUrls = {
  development: 'http://localhost:8000',
  alpha: 'http://alpha.xxx.com',
  production: 'http://xxx.com',
};

export const config = {
  name: 'react-start',
  prefix: 'react-start',
  footerText: 'react-start © 2018',
  logo: '/logo.ico',
  domain: domains[APP_ENV],
  loginUrl: loginUrls[APP_ENV],
};
