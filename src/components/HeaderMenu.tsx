import { Burger, Button, Container, createStyles, Group, Header } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo_no_bg.png';
import '../styles/HeaderMenu.css';
import navigateToPage from '../utils/navigate';
import useScrollDirection from '../utils/scrollDirection';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
        position: 'absolute',
    },

    link: {
        position: 'relative',
        display: 'block',
        lineHeight: 1,
        margin: '0 2.5rem 0 2.5rem',
        borderRadius: theme.radius.md,
        textDecoration: 'none',
        color: '#0e0d0d',
        fontSize: '2.5rem',
        fontWeight: 300,
        fontFamily: 'Quantum',
        textAlign: 'center',
        transition: '0.3s',
        top: -10,

        '&:hover': {
            transform: 'scale(1.1, 1.1)',
        },
    },

    linkLabel: {
        marginRight: 5,
    },

    /* purchaseButton: {
        height: 32,
        width: 120,
        backgroundColor: '#859398',
        '&:hover': {
            backgroundColor: '#9dacb1',
        },
        margin: 0,
        padding: 0,
    }, */

    //odstrani default <a> styling
    anchor: {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

interface HeaderActionProps {
    id: string;
    links: { link: string; label: string }[];
}

export default function HeaderMenu({ links }: HeaderActionProps) {
    const [routeChange] = navigateToPage();
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const [sidebar, setSidebar] = useState(false);

    const scrollDirection = useScrollDirection();

    const keys: Object = { 37: 1, 38: 1, 39: 1, 40: 1 };

    const items = links.map((link) => {
        let SCROLL_TIME = 0;

        //prilagodi na koncu ob končani vsebini
        switch (link.link) {
            case 'about-section':
                SCROLL_TIME = 1500;
                break;
            case 'students-section':
                SCROLL_TIME = 2100;
                break;
            case 'master-section':
                SCROLL_TIME = 2600;
                break;
            default:
                break;
        }

        return (
            <Link to={link.link} duration={SCROLL_TIME} smooth={true} key={link.label} href={'#' + link.link} className={classes.link}>
                {link.label}
            </Link>
        );
    });

    const handleBurgerClick = () => {
        setSidebar((sidebar) => !sidebar);
        toggle(); //za ikono
        document.body.classList.toggle('remove-overflow-y');
    };

    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} className={`linear-gradient-background-color ${scrollDirection === 'down' ? 'down' : 'up'}`}>
            <Container className={`${classes.inner}`} fluid>
                <Burger opened={opened} onClick={handleBurgerClick} className={`navbar-toggle ${classes.burger}`} size="md"></Burger>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={() => handleBurgerClick()}>
                        <li className="nav-text">
                            <a>about</a>
                        </li>
                        <li className="nav-text">
                            <a>students</a>
                        </li>
                        <li className="nav-text">
                            <a>master</a>
                        </li>
                    </ul>
                </nav>

                {/* https://github.com/briancodex/react-sidebar-v1/tree/master/src/components */}
                <img src={logo} alt="LOGO" className="logo" height="150px" />
                <Group spacing={1} className={classes.links}>
                    {items}
                </Group>
                <Button radius="xl" className={`purchase-button`} onClick={() => routeChange('purchase')}>
                    <a className={classes.anchor} href="/purchase">
                        purchase
                    </a>
                </Button>
            </Container>
        </Header>
    );
}
