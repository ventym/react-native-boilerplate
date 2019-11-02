import changeLanguage from './changeLanguage';
import fetchClientList from './fetchClientList';
import fetchNasaData from './fetchNasaData';
import fetchNasaImages from './fetchNasaImages';
import generateRandomAppMessage from './generateRandomAppMessage';

const thunks = {
    changeLanguage,
    fetchClientList,
    fetchNasaData,
    fetchNasaImages,
    generateRandomAppMessage,
};

export default thunks;
