import Narbar from 'src/components/narbar/Narbar';
import { Box, Flex, Text, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SearchBox from '../components/seach-box/search-box';
import { Footer } from '../components/footer/footer';
import CoachBoxList from '../components/coach-box-list/coach-box-list';
import { MappingCityData } from '../constants/city-district';

interface RouteBreadCrumbProps {
  departure: string;
  arrival: string;
}
const RouteBreadCrumb = ({ departure, arrival }: RouteBreadCrumbProps) => (
  <Flex alignItems="center">
    <Text fontSize="xl" color="accentColor">
      Vé xe khách
    </Text>
    &#62;
    <Text fontSize="xl" padding={3}>
      xe đi {departure} từ {arrival}
    </Text>
  </Flex>
);

const TotalCoachText = ({ departure, arrival }: RouteBreadCrumbProps) => (
  <Box paddingTop={5} width={732} margin="0 auto">
    <Text fontSize={22} fontWeight="bold">
      Vé xe từ {departure} đi {arrival}: 1779 chuyến
    </Text>
  </Box>
);

export default function ResultSearch() {
  const router = useRouter();
  const { query } = router;
  return (
    <>
      <Narbar />
      <Container maxW="7xl" marginTop={2}>
        <RouteBreadCrumb
          departure={MappingCityData[`${query?.departure}`]}
          arrival={MappingCityData[`${query?.arrive}`]}
        />
        <SearchBox />
        <TotalCoachText
          departure={MappingCityData[`${query?.departure}`]}
          arrival={MappingCityData[`${query?.arrive}`]}
        />
        <CoachBoxList reqBody = {query}/>
      </Container>
      <Footer />
    </>
  );
}
