import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'react-native-config';

const reqresAxiosRequestConfig: AxiosRequestConfig = {
    baseURL: config.REQRES_API_URL,
};

const reqresApi = axios.create(reqresAxiosRequestConfig);

if (__DEV__) {
    reqresApi.interceptors.request.use(
        (request: AxiosRequestConfig) => {
            console.log('api request', request);
            return request;
        },
        (error: any): any => {
            console.log('api request', error);
            return error;
        },
    );
    reqresApi.interceptors.response.use(
        (response: AxiosResponse) => {
            console.log('api response', response);
            return response;
        },
        (error: any): any => {
            console.log('api response', error);
            return error;
        },
    );
}

if (__DEV__ && config.API_MOCKED) {
    const attachMocks = require('./mocks').default;
    attachMocks(reqresApi);
}

export default reqresApi;
