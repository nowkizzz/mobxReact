import axios from 'axios';
import {Modal,message} from 'antd';

const service = axios.create({});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

function isArray(val) {
  if (typeof val === 'function') {
    return Array.isArray(val);
  } else {
    return Object.prototype.toString.call(val) === '[object Array]';
  }
}

function formatPostData(query) {
  if (typeof query === 'string') {
    return query;
  }
  if (typeof query === 'object' && query) {
    let str = '';
    for (let key in query) {
      if (isArray(query[key])) {
        query[key].forEach(x => {
          if (str !== '') {
            // str = str + '&' + key + '=' + encodeURIComponent(x);
            str = str + '&' + key + '=' + (x);
          } else {
            str = key + '=' + (x);
            // str = key + '=' + encodeURIComponent(x);
          }
        });
      } else {
        if (str !== '') {
          if (query[key] === undefined || query[key] === null) {
            str = str + '&' + key + '=' + '';
          } else {
            str = str + '&' + key + '=' + (query[key]);
          }
          // str = str + '&' + key + '=' + encodeURIComponent(query[key]);
        } else {
          if (query[key] === undefined || query[key] === null) {
            str =  key + '=' + '';
          } else {
            str =  key + '=' + (query[key]);
          }
          // str = key + '=' + encodeURIComponent(query[key]);
          // str = key + '=' + (query[key]);
        }
      }
    }
    return str;
  }
}

service.interceptors.request.use(config => {
  if (config.method === 'get') {
    config.params = Object.assign(config.params, {
      _: new Date().getTime()
    });
    for (let key in config.params) {
      // config.params[key] = encodeURIComponent(config.params[key]);
      config.params[key] = (config.params[key]);
    }
  }
  if (config.method === 'post') {
    config.data = formatPostData(config.data);
  }
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
});

// 处理个别不需要提示的接口
function handleError(response) {
  if (response.config.url === 'webservice/bizVideoItemPlay.action' && (response.data.message === '视频转换中，请稍候再观看。' || response.data.message === '视频未转换，请稍候再观看。' || response.data.message === '视频转换出错，请联系管理员。')) {
    return true;
  }
  if (response.config.url === 'webservice/bizVideoBackupItemPlay.action' && (response.data.message === '视频转换中，请稍候再观看。' || response.data.message === '视频未转换，请稍候再观看。' || response.data.message === '视频转换出错，请联系管理员。')) {
    return true;
  }
  if (response.config.url === 'webservice/sysSettingItem.action' && (response.data.message === 'Licence error!')) {
    return true;
  }
  // 上一个作业作品 (评审上一个作业作品)（老师） 
  if (response.config.url === 'webservice/bizWorkScoreItemResultEmployeeItemPrev.action') {
    return true;
  }
  // 下一个作业作品 (评审下一个作业作品)（老师） 
  if (response.config.url === 'webservice/bizWorkScoreItemResultEmployeeItemNext.action') {
    return true;
  }
  // 上一个作业作品 (评审上一个作业作品)（学生） 
  if (response.config.url === 'webservice/bizWorkScoreItemResultStudentItemPrev.action') {
    return true;
  }
  // 下一个作业作品 (评审下一个作业作品)（学生） 
  if (response.config.url === 'webservice/bizWorkScoreItemResultStudentItemNext.action') {
    return true;
  }
  // 预览文档
  if (response.config.url === 'webservice/bizDocumentItem.action') {
    return true;
  }
  return false;
}

// 全部添加错误提示
service.interceptors.response.use(
  response => {
    if(!response.data.success) {
      // 特别事例 当个人空间刚上传完视频时 视频未转换 不提示
      if (handleError(response)) {
        console.log(response);
        return Promise.reject(response);
      } else {
        // 失败的时候就用catch
        message.error(response.data.message);
        return Promise.reject(response);
        // return response;
      }
    } else if (response.data.success){
      return response;
    }
    return response;
  },
  error => {
    console.log('error:' + error);
    return Promise.reject(error);
  }
);

export default service;