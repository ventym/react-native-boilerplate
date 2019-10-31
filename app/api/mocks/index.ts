import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';

const attachMocks = (axiosInstance: AxiosInstance) => {
    const mock = new MockAdapter(axiosInstance, { delayResponse: 2000 });

    console.warn('MOCKS ENABLED!');

    // mock.onGet('/users').reply(200, require('./fetchClientList.json'));
    mock.onGet('/users').timeout();
};

export default attachMocks;
