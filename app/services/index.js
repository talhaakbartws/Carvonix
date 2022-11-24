import {post_request, get_request} from './Requests';

const LoginApi = async body => {
  const Test = await post_request({target: '/api/login', body: body});
  return Test;
};
const getVreitLogs = async link => {
  const Test = await get_request('/api/vreits-logs/' + link);
  return Test;
};

export {LoginApi, getVreitLogs};
