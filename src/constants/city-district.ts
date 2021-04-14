import { Location } from '@quangdvnnnn/go-n-share';

export const cities = [
  {
    sub_name: Location.HANOI_SUBNAME,
    name: Location.HANOI,
  },
  {
    sub_name: Location.HOCHIMINH_SUBNAME,
    name: Location.HOCHIMINH,
  },
  {
    sub_name: Location.DANANG_SUBNAME,
    name: Location.DANANG,
  },
  {
    sub_name: Location.QUANGNINH_SUBNAME,
    name: Location.QUANGNINH,
  },
];

export const MappingCityData: { [key: string]: string } = {
  [Location.HANOI_SUBNAME]: Location.HANOI,
  [Location.HOCHIMINH_SUBNAME]: Location.HOCHIMINH,
  [Location.DANANG_SUBNAME]: Location.DANANG,
  [Location.QUANGNINH_SUBNAME]: Location.QUANGNINH,
};
