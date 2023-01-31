import React from 'react';
import CommonHeader from "../components/CommonHeader";
import DeliveryPage from "../components/common-pages/DeliveryPage";
import ReturnPage from "../components/common-pages/ReturnPage";
import ContactsPage from "../components/common-pages/ContactsPage";
import {
    Box,
    Flex,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel
} from '@chakra-ui/react';

const CommonPage = () => {
    return (
        <Box maxH={'100vh'}>
            <CommonHeader />
            <Flex>
                <Box>
                    <Tabs orientation={'horizontal'} colorScheme={'blue'} width={'100vw'}>
                        <TabList
                            alignItems={'start'}
                            h={['fit-content']}
                            width={['100vw']}
                        >
                            <Tab w={['33.33vw']} fontSize={['0.80rem', '1rem']}>Доставка</Tab>
                            <Tab w={['33.33vw']} fontSize={['0.80rem', '1rem']}>Возврат</Tab>
                            <Tab w={['33.33vw']} fontSize={['0.80rem', '1rem']}>Контакты</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <DeliveryPage />
                            </TabPanel>
                            <TabPanel>
                                <ReturnPage />
                            </TabPanel>
                            <TabPanel>
                                <ContactsPage />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Flex>
        </Box>
    );
};

export default CommonPage;