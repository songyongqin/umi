import request from '@/utils/request';

const configUrl = '/config/app.json';

const getAppConfig = () => {
  request
    .get(configUrl)
    .then(response => {
      console.log(response, 22);
    })
    .catch(error => {
      console.log(error);
    });

  // if (get(window, '__appConfig')) {
  //   return get(window, '__appConfig');
  // }
  // let res = await request({ url: configUrl, common: false });
  // window['__appConfig'] = get(res, 'data');
  // return get(res, 'data') || {};
};

export default getAppConfig;
