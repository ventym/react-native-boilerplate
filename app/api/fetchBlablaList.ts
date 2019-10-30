import { AxiosRequestConfig } from 'axios';

import apiInstance from 'app/api';
import { IResponse, IFetchBlablaListResponse } from 'app/api/types';
import { IBlabla } from 'app/state/types';


const fetchBlablaList = async (): Promise<IResponse<IBlabla[]>> => {
    try {
        const request: AxiosRequestConfig = {
            method: 'GET',
            url: '/users',
        };
        const response = await apiInstance.request<IFetchBlablaListResponse>(request);

        if (response.status !== 200) {
            return {
                success: false,
                error: 'Response error',
            };
        }

        if (!validate(response.data)) {
            return {
                success: false,
                error: 'Validation error',
            };
        }

        return {
            success: true,
            data: convert(response.data),
        };

    } catch(error) {
        return {
            success: false,
            error: 'Request error',
        };
    }
};

export default fetchBlablaList;

// TODO
const validate = (responseData: IFetchBlablaListResponse): boolean => {
    return true;
};

const convert = (responseData: IFetchBlablaListResponse): IBlabla[] => {
    return responseData.data.map(it => ({
        id: it.id.toString(),
        fullName: `${it.first_name} ${it.last_name}`.trim(),
        firstName: it.first_name,
        lastName: it.last_name,
        email: it.email,
        avatar: it.avatar,
    }));
};
