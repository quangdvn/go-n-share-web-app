import Narbar from 'src/components/narbar/Narbar';
import { Box, Flex, Text, Container } from '@chakra-ui/react';
import SearchBox from '../components/seach-box/search-box';
import { Footer } from '../components/footer/footer';
import CoachBoxList from '../components/coach-box-list/coach-box-list';

const RouteBreadCrumb = () => (
  <Flex alignItems="center">
    <Text fontSize="xl" color="#1890ff">
      Vé xe khách
    </Text>
    &#62;
    <Text fontSize="xl" padding={3}>
      xe đi Quảng Ninh từ Hà Nội
    </Text>
  </Flex>
);

const TotalCoachText = () => (
  <Box paddingTop={5} width={732} margin="0 auto">
    <Text fontSize={22} fontWeight="bold">
      Vé xe từ Hà Nội đi Quảng Ninh: 1779 chuyến
    </Text>
  </Box>
);

export default function ResultSearch() {
  return (
    <>
      <Narbar />
      <Container maxW="7xl" marginTop={2}>
        <RouteBreadCrumb />
        <SearchBox />
        <TotalCoachText />
        <CoachBoxList />
      </Container>
      <Footer />
    </>
  );
}
