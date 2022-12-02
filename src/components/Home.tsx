import { MantineProvider } from '@mantine/core';
import React from 'react';
import '../styles/App.css';
import Footer from './Footer';
import HeaderMenu from './HeaderMenu';
import Main from './MainContent';

const Home = () => {
    return (
        <MantineProvider withGlobalStyles>
            <HeaderMenu
                id="top-of-the-page"
                links={[
                    { link: 'about-section', label: 'about' },
                    { link: 'master-section', label: 'master' },
                    { link: 'students-section', label: 'students' },
                ]}
            ></HeaderMenu>
            <Main></Main>
            <Footer></Footer>
        </MantineProvider>
    );
};

export default Home;
