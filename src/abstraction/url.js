import { urlGenerator } from '@/services/url.services';

const urls = {
    indexCar: 'abstract-car',
    storeCar: 'abstract-car',
    updateCar: 'abstract-car/:car',
    destroyCar: 'abstract-car/:car',

    indexClientCar:'client-car',
    storeClientCar:'client-car',
    updateClientCar:'client-car/:car',
    destroyClientCar:'client-car/:car',

    indexBrand: 'brands',

    indexBodyType: 'body-types',

    storeFiles: 'media',

    sendCode: 'login',
    logout: 'logout',
    login: 'login/code',
};

export default urlGenerator(urls);