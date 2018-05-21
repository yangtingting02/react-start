import fetch from 'dva/fetch';
import { notification } from 'antd';
import { config } from './config';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
  const requestUrl = `${config.domain}${url}`;
  return fetch(requestUrl, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      if (parseInt(data.code, 10) === -101) {
        window.location.href = config.loginUrl;
      }
      return { data };
    })
    .catch(error => {
      if ('stack' in error && 'message' in error) {
        notification.error({
          message: `请求错误 ${error.response.status}: ${url}`,
          description: error.message,
        });
      }
      return null;
    });
}
