export type ParamList = {
    'ClientListScreen': undefined;
    'ClientDetailsScreen': {
        id: string;
    };
    'NasaCameraListScreen': undefined;
    'NasaRoverListScreen': undefined;
    'NasaPhotoListScreen': {
        filterBy: 'CAMERA' | 'ROVER';
        filterId: string;
        title: string;
    };
    'NasaPhotoDetailsSwipeableListScreen': {
        filterBy: 'CAMERA' | 'ROVER';
        filterId: string;
        initialIndex: number;
    };
    'SettingsScreen': undefined;
};
