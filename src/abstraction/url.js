import { urlGenerator } from '@/services/url.services';

const urls = {
    // abstract car
    indexCar: 'abstract-car',
    storeCar: 'abstract-car',
    updateCar: 'abstract-car/:car',
    destroyCar: 'abstract-car/:car',
    indexBrand: 'brands',
    indexTrim: 'trims',
    indexBodyType: 'body-types',

    // client car
    indexClientCar:'client-car',
    storeClientCar:'client-car',
    updateClientCar:'client-car/:car',
    destroyClientCar:'client-car/:car',
    indexStatus:'client-car-status',

    // save files
    storeFiles: 'media',

    // auth
    sendCode: 'login',
    logout: 'logout',
    login: 'login/code',
};

export default urlGenerator(urls);