import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'react-native-config';

const nasaAxiosRequestConfig: AxiosRequestConfig = {
    baseURL: config.NASA_API_URL,
};

const nasaApi = axios.create(nasaAxiosRequestConfig);

if (__DEV__) {
    nasaApi.interceptors.request.use(
        (request: AxiosRequestConfig) => {
            console.log('api request', request);
            return request;
        },
        (error: any): any => {
            console.log('api request', error);
            return error;
        },
    );
    nasaApi.interceptors.response.use(
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
    attachMocks(nasaApi);
}

export default nasaApi;
