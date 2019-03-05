import fetch from '@/utils/fetch.js';

export const getSysSetting = (params = {}) => {
  return fetch({
    url: 'webservice/sysSettingItem.action',
    method: 'get',
    params
  });
};