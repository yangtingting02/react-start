import { notification } from 'antd';

export const successNotification = (message, description) => {
  notification.success({
    message: message || '操作成功!',
    description,
    duration: 2,
  });
};

export const errorNotification = (message, description) => {
  notification.error({
    message: message || '操作失败!',
    description,
    duration: 3,
  });
};
