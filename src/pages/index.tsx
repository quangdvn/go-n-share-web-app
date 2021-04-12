import Narbar from 'src/components/narbar/Narbar';
// import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import SearchBox from '../components/seach-box/search-box';
import { Footer } from '../components/footer/footer';

export default function Index() {
  return (
    <>
      <Narbar />
      <Box height="calc(80vh - 60px)" width="100%">
        {/* <Image
          src="/banner.jpg"
          alt="Picture of the author"
          width="100%"
          height="100%"
        /> */}
        <SearchBox />
      </Box>
      <Footer />
    </>
  );
}
