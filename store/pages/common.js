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
                    <Tabs orientation={'vertical'} colorScheme={'red'} width={'100rem'}>
                        <TabList
                            alignItems={'start'}
                            borderRight={'2px'}
                            borderRightColor={'gray.200'}
                            h={'100vh'}
                            width={'15rem'}
                        >
                            <Tab w={'15rem'}>Доставка</Tab>
                            <Tab w={'15rem'}>Политика возврата</Tab>
                            <Tab w={'15rem'}>Контакты</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel pl={'2rem'}>
                                <DeliveryPage />
                            </TabPanel>
                            <TabPanel pl={'2rem'}>
                                <ReturnPage />
                            </TabPanel>
                            <TabPanel pl={'2rem'}>
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