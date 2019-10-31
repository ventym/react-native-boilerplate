import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';

const attachMocks = (axiosInstance: AxiosInstance) => {
    const mock = new MockAdapter(axiosInstance, { delayResponse: 2000 });

    console.warn(`ENABLE MOCKS FOR ${axiosInstance.defaults.baseURL}`);

    // mock.onGet('/users').reply(200, require('./fetchClientList.json'));
    mock.onGet('/users').timeout();
    mock.onGet('/rovers/curiosity/photos').reply(200, require('./fetchNasaData.json'));
};

export default attachMocks;
