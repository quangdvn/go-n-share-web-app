/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import { Box, Text } from '@chakra-ui/react';

import { Coach } from '../coach-box-list';
import Trip from './trip/trip';

interface TerminalProps {
  departureTerminal: string;
  arriveTerminal: string;
  coaches: Coach[];
  basePrice: number;
}

export default function Terminal({
  departureTerminal,
  arriveTerminal,
  coaches,
  basePrice,
}: TerminalProps) {
  if (coaches.length > 0) {
    return (
      <Box>
        <Box paddingTop={5} width={732} margin="0 auto">
          <Text fontSize={22} fontWeight="bold">
            Xe đi từ bến xe {departureTerminal} đến bến xe {arriveTerminal}:{' '}
            {coaches.length} chuyến
          </Text>
        </Box>
        {coaches.map(
          coach =>
            coach.trips.length > 0 &&
            coach.trips.map((trip, index) => (
              <Trip
                trip={trip}
                key={index}
                seatNumber={coach.seatNumber}
                numberPlate={coach.seatNumber}
                departureTerminal={departureTerminal}
                arriveTerminal={arriveTerminal}
                basePrice={basePrice}
              />
            ))
        )}
      </Box>
    );
  }
  return (
    <Box paddingTop={5} width={732} margin="0 auto">
      <Text fontSize={22} fontWeight="bold">
        Xe đi từ bến xe {departureTerminal} đến bến xe {arriveTerminal}:{' '}
        {coaches.length} chuyến
      </Text>
    </Box>
  );
}
