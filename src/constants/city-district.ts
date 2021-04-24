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

export const MappingPostCodeCity: { [key: string]: number } = {
  [Location.HANOI_SUBNAME]: 18410000,
  [Location.HOCHIMINH_SUBNAME]: 18470000,
  [Location.DANANG_SUBNAME]: 18450000,
  [Location.QUANGNINH_SUBNAME]: 18401000,
};
