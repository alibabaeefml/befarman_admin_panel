import { urlGenerator } from '@/services/url.services';

const urls = {
    indexCar: 'abstract-car',
    storeCar: 'abstract-car',
    updateCar: 'abstract-car/:car',
    destroyCar: 'abstract-car/:car',

    indexBrand: 'brands',
};

export default urlGenerator(urls);