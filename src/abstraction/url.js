import { urlGenerator } from '@/services/url.services';

const urls = {
    indexCar: 'abstract-car',
    storeCar: 'abstract-car',
    updateCar: 'abstract-car/:car',
    destroyCar: 'abstract-car/:car',

    indexBrand: 'brands',
    sendCode: 'login',
    logout: 'logout',
    login: 'login/code',
};

export default urlGenerator(urls);