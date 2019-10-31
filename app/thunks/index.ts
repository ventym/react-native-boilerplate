import changeLanguage from './changeLanguage';
import fetchClientList from './fetchClientList';
import fetchNasaData from './fetchNasaData';
import fetchNasaImages from './fetchNasaImages';

const thunks = {
    changeLanguage,
    fetchClientList,
    fetchNasaData,
    fetchNasaImages,
};

export default thunks;
