import { GeoPoint } from '@/models/GeoPoint.model';

export function getDeliveryPointCoordinates() {
  return Promise.resolve<Array<GeoPoint>>([
    {
      name: 'Пункт выдачи 1',
      coordinates: [55.86, 37.84],
      id: 1,
    },
    {
      name: 'Пункт выдачи 2',
      coordinates: [55.7, 37.55],
      id: 2,
    },
    {
      name: 'Пункт выдачи 3',
      coordinates: [55.8, 37.4],
      id: 3,
    },
  ]);
}
