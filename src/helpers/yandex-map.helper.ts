import { GeoPoint } from '@/models/GeoPoint.model';

export class YandexMapPersonal {
  private _apiKey = '959b2de8-f90a-4f8a-ba8f-59260553374c';

  get apiKey() {
    return this._apiKey;
  }
}

export function createPoint(geoPoint: GeoPoint) {
  return new window.ymaps.GeoObject(
    {
      geometry: {
        type: 'Point',
        coordinates: geoPoint.coordinates,
      },
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'geoPoint.png',
      iconImageSize: [50, 50],
    },
  );
}
