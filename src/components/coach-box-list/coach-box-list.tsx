/* eslint-disable react/no-children-prop */
import { Box } from '@chakra-ui/react';
import CoachBox from './coach-box/coach-box';

export default function CoachBoxList() {
  return (
    <Box>
      {[1, 2, 3, 4, 5].map((data, index) => (
        <CoachBox key={index} />
      ))}
    </Box>
  );
}
