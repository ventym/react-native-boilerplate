import { AxiosRequestConfig } from 'axios';

import apiInstance from 'app/api';
import { IResponse, IFetchClientListResponse } from 'app/api/types';
import { IClient } from 'app/state/types';


const fetchClientList = async (): Promise<IResponse<IClient[]>> => {
    try {
        const request: AxiosRequestConfig = {
            method: 'GET',
            url: '/users',
            params: {
                'per_page': 20,
            },
        };
        const response = await apiInstance.request<IFetchClientListResponse>(request);

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

export default fetchClientList;

// TODO
const validate = (responseData: IFetchClientListResponse): boolean => {
    return true;
};

const convert = (responseData: IFetchClientListResponse): IClient[] => {
    return responseData.data.map(it => ({
        id: it.id.toString(),
        fullName: `${it.first_name} ${it.last_name}`.trim(),
        firstName: it.first_name,
        lastName: it.last_name,
        email: it.email,
        avatar: it.avatar,
    }));
};
