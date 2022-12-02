import { ActionIcon, Container, createStyles, Group } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons';
import React, { useState } from 'react';
import logo from '../assets/logo_no_bg.png';
import '../styles/Footer.css';

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 120,
        borderTop: `1px solid gray`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

export default function Footer() {
    const { classes } = useStyles();
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (value: string) => {
        setEmail(value);
        setError(false);
    };
    const handleSubmit = () => {
        const error = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(email);
        error ? setError(true) : console.log(email);
    };

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <img src={logo} alt="LOGO" className="logo-footer" />
                <div className="newsletter">
                    <input
                        className={error ? 'error' : ''}
                        type="text"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => {
                            handleChange(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        Submit
                    </button>
                </div>
                <Group spacing={0} className={classes.links} position="right" noWrap>
                    <a href="https://www.google.com" target="_blank">
                        <ActionIcon size="lg">
                            <IconBrandTwitter size={18} stroke={1.5} />
                        </ActionIcon>
                    </a>
                    <a href="https://www.google.com" target="_blank">
                        <ActionIcon size="lg">
                            <IconBrandYoutube size={18} stroke={1.5} />
                        </ActionIcon>
                    </a>
                    <a href="https://www.google.com" target="_blank">
                        <ActionIcon size="lg">
                            <IconBrandInstagram size={18} stroke={1.5} />
                        </ActionIcon>
                    </a>
                </Group>
            </Container>
        </footer>
    );
}
