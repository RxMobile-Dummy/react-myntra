
import URL from './URL';
import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://2111-180-211-112-179.in.ngrok.io',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: ``,
  },
});

axiosApi.interceptors.request.use(function (config: any) {
  config.headers.Authorization;
  return config;
});

export const PostApi = async (reqUrl: String, paramData: any) => {

  const res = await axiosApi.post(`${URL.BASE_URL}${reqUrl}`, paramData, {
    headers: {
      Authorization: 'Bearer ' + 'sad',
      'Content-Type': 'application/json',
    },
  });
  console.log("Request is", reqUrl, paramData)
  return JSON.stringify(res.data);
};

export const PutApi = async (reqUrl: String, paramData: any) => {
  const res = await axiosApi.put(`${URL.BASE_URL}${reqUrl}`, paramData, {
    headers: {
      Authorization: 'Bearer ' + 'sad',
      'Content-Type': 'application/json',
    },
  });

  return JSON.stringify(res.data);
};

// export const GetApi = async (reqUrl: String, paramData: any) => {
//   const res = await axiosApi.get(`${URL.BASE_URL}${reqUrl}`, paramData, {
//     // headers: {
//     //   //Authorization: 'Bearer ' + 'sad',
//     // },
//   });
//   return JSON.stringify(res.data);
// };

export const getRequest = async (endpoint: any, parameter = {}) => {
  try {
    const { data, request } = await axiosApi.get(`${URL.BASE_URL}${endpoint}`, {
      params: parameter,
    });
    console.log("Request", request);
    return data;
  } catch (e) {
    return false;
  }
};

export const postRequest = async (endpoint: any, body: any) => {
  try {
    console.log("Endpoint is", endpoint)
    const { data, request } = await axiosApi.post(`${URL.BASE_URL}${endpoint}`, body);
    console.log("Request is", request)
    return data;
  } catch (e) {
    return false;
  }
};

export const postRequestGraphQL = async (query: any, body: any) =>{
    const data = await axios.post(URL.BASE_URL, {
      query: query,
      variables: body
    }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    console.log("res ::::::" , JSON.stringify(data.data.data));
    return data.data.data;
}

export const postRequestGraphQLAuth = async (query: any, body: any, token: string) =>{
  const data = await axios.post(URL.BASE_URL, {
    query: query,
    variables: body
  }, {
      headers: {
        Authorization: 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    })
  console.log("res ::::::" , JSON.stringify(data.data.data));
  return data.data.data;
}
