/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Terminal from './coach-box/coach-box';
import { searchTrip } from '../../api/action';

export interface Trip {
  id: number;
  departureDate: string;
  departureTime: number;
  departureLocation: string;
  arriveDate: string;
  arriveTime: number;
  arriveLocation: string;
  tripStatus: string;
  coachId: number;
}
export interface Coach {
  id: number;
  routeId: number;
  name: string;
  numberPlate: string;
  isAvailable: true;
  trips: Trip[];
  seatNumber: number;
}
interface TerminalProps {
  routeId: number;
  drivingDuration: number;
  basePrice: number;
  departureTerminal: string;
  departureAddress: string;
  departureLatitude: string;
  departureLongitude: string;
  arriveTerminal: string;
  arriveAddress: string;
  arriveLatitude: string;
  arriveLongitude: string;
  coaches: Coach[];
}

export default function CoachBoxList({ reqBody }) {
  const [terminalList, setTerminalList] = useState<TerminalProps[]>([
    {
      routeId: 1,
      drivingDuration: 3,
      basePrice: 100000,
      departureTerminal: 'Mỹ Đình',
      departureAddress: 'Từ Liêm, Hà Nội',
      departureLatitude: '21.0284120968974',
      departureLongitude: '105.77828474956691',
      arriveTerminal: 'Móng Cái',
      arriveAddress: 'Móng Cái, Quảng Ninh',
      arriveLatitude: '21.531268567427237',
      arriveLongitude: '107.95835730996707',
      coaches: [
        {
          id: 17,
          routeId: 1,
          name: 'Medium #17',
          numberPlate: '29A-72649',
          isAvailable: true,
          trips: [],
          seatNumber: 40,
        },
        {
          id: 59,
          routeId: 1,
          name: 'Small #59',
          numberPlate: '29A-43817',
          isAvailable: true,
          trips: [],
          seatNumber: 30,
        },
      ],
    },
    {
      routeId: 11,
      drivingDuration: 3,
      basePrice: 100000,
      departureTerminal: 'Gia Lâm',
      departureAddress: 'Long Biên, Hà Nội',
      departureLatitude: '21.048545080619885',
      departureLongitude: '105.87831089646433',
      arriveTerminal: 'Móng Cái',
      arriveAddress: 'Móng Cái, Quảng Ninh',
      arriveLatitude: '21.531268567427237',
      arriveLongitude: '107.95835730996707',
      coaches: [],
    },
  ]);

  useEffect(() => {
    const getTerminalList = async () => {
      const res = await searchTrip(reqBody);
      console.log('response', res);
      setTerminalList(res);
    };
    getTerminalList();
  }, []);

  return (
    terminalList.length &&
    terminalList.map((terminal, index) => (
      <Terminal
        key={index}
        departureTerminal={terminal.departureTerminal}
        arriveTerminal={terminal.arriveTerminal}
        coaches={terminal.coaches}
      />
    ))
  );
}
