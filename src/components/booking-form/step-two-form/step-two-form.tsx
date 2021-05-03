/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-destructuring */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-cycle */
/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import {
  Stack,
  Input,
  InputGroup,
  Textarea,
  FormControl,
  FormLabel,
  InputLeftElement,
  Switch,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { Field, useFormikContext } from 'formik';
import { BiPhone } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { MappingPostCodeCity } from 'src/constants/city-district';
import { IProps } from '../booking-form';
import { getCoordinates } from '../../../api/action';
import LeafletMap from '../../Map/Map';

export interface FormikProps {
  paymentMethod: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  note: string;
  transitType: string;
  hasTransit: boolean;
  address: string;
  transitNote: string;
  location: string[];
}

export default function StepTwoForm() {
  const [isTransit, setIsTransit] = useState(false);
  const [coordinates, setCoordinates] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { values, setValues } = useFormikContext<FormikProps>();
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const router = useRouter();
  const handleGetLocation = async () => {
    const { address } = values;
    const postCode = MappingPostCodeCity[`${router.query.departure}`];
    setLoading(true);
    const coordinatesRes = await getCoordinates(address, postCode);
    console.log('coordinates', coordinatesRes);
    setLoading(false);
    setCoordinates([coordinatesRes[1], coordinatesRes[0]]);
    setValues({
      ...values,
      location: [`${coordinatesRes[1]}`, `${coordinatesRes[0]}`],
    });
  };

  // const renderMap = () => {
  //   const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');
  //   return (
  //     <MapContainer
  //       center={coordinates}
  //       zoom={13}
  //       scrollWheelZoom={false}
  //       style={{ height: 400, width: '100%' }}
  //     >
  //       <TileLayer
  //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //       <Marker
  //         position={coordinates}
  //         icon={
  //           new Icon({
  //             iconUrl: 'https://i.ibb.co/82Gc7rR/Marker.png',
  //             iconSize: [25, 41],
  //             iconAnchor: [12, 41],
  //           })
  //         }
  //       >
  //         <Popup>
  //           A pretty CSS3 popup. <br /> Easily customizable.
  //         </Popup>
  //       </Marker>
  //     </MapContainer>

  //   );
  // };

  return (
    <Stack spacing={4} padding={10}>
      <Field name="fullName">
        {({ field }: IProps) => (
          <FormControl id="fullName" isRequired>
            <FormLabel>Họ tên</FormLabel>
            <Input placeholder="Họ và tên hành khách" {...field} />
          </FormControl>
        )}
      </Field>
      <Field name="phoneNumber">
        {({ field }: IProps) => (
          <FormControl id="phoneNumber" name="phoneNumber" isRequired>
            <FormLabel>Số điện thoại</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiPhone color="gray.300" />}
              />
              <Input type="tel" placeholder="Số điện thoại" {...field} />
            </InputGroup>
          </FormControl>
        )}
      </Field>
      <Field name="email">
        {({ field }: IProps) => (
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Địa chỉ Email" {...field} />
          </FormControl>
        )}
      </Field>

      <FormControl alignItems="center">
        <FormLabel mb="0">Bạn có muốn đi xe transit không?</FormLabel>
        <Switch
          colorScheme="teal"
          id="hasTransit"
          paddingTop={5}
          onChange={() => {
            setIsTransit(!isTransit);
            setValues({ ...values, hasTransit: !isTransit });
          }}
        />
      </FormControl>
      <LeafletMap />

      {isTransit && (
        <Stack spacing={4}>
          <Field name="address" mt={5}>
            {({ field }: IProps) => (
              <FormControl id="address" isRequired>
                <FormLabel>Địa chỉ đón</FormLabel>
                <Input placeholder="Địa chỉ" {...field} />
              </FormControl>
            )}
          </Field>
          {loading ? (
            <Spinner size="lg" color="teal" padding={5} ml={10} />
          ) : (
            <Button
              colorScheme="teal"
              size="sm"
              marginLeft={5}
              width={195}
              onClick={handleGetLocation}
            >
              Xác nhận ví trí trên bản đồ
            </Button>
          )}

          <Field name="transitNote" mt={5}>
            {({ field }: IProps) => (
              <FormControl id="transitNote">
                <FormLabel>Ghi chú Transit</FormLabel>
                <Textarea defaultValue="" size="lg" {...field} />
              </FormControl>
            )}
          </Field>
        </Stack>
      )}

      <Field name="note">
        {({ field }: IProps) => (
          <FormControl id="note">
            <FormLabel>Ghi chú</FormLabel>
            <Textarea defaultValue="" size="lg" {...field} />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        )}
      </Field>
    </Stack>
  );
}
