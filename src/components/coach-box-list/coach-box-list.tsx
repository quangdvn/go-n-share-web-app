/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Terminal from './coach-box/coach-box';
import { searchTrip } from '../../api/action';
import { useRouter } from 'next/router';
import _ from 'lodash';

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

export default function CoachBoxList() {
  const [terminalList, setTerminalList] = useState<TerminalProps[]>([]);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (!_.isEmpty(query)) {
      const getTerminalList = async () => {
        const res = await searchTrip(query);
        if (res) {
          setTerminalList(res);
        }
      };
      getTerminalList();
    }
  }, [query]);

  return (
    <>
      {terminalList.map((terminal, index) => (
        <Terminal
          key={index}
          departureTerminal={terminal.departureTerminal}
          arriveTerminal={terminal.arriveTerminal}
          coaches={terminal.coaches}
          basePrice={terminal.basePrice}
        />
      ))}
    </>
  );
}
