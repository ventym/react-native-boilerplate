import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'react-native-config';

const defaultAxiosRequestConfig: AxiosRequestConfig = {
    baseURL: config.API_URL, // TODO: react-native-config
};

const apiInstance = axios.create(defaultAxiosRequestConfig);

if (__DEV__) {
    apiInstance.interceptors.request.use(
        (request: AxiosRequestConfig) => {
            console.log('api request', request);
            return request;
        },
        (error: any): any => {
            console.log('api request', error);
            return error;
        },
    );
    apiInstance.interceptors.response.use(
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
    attachMocks(apiInstance);
}

export default apiInstance;
