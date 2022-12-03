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
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const error = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(email);
        if (error) {
            setError(true);
        } else {
            const input = document.getElementById('email-input') as HTMLInputElement;
            const form = document.getElementById('newsletter-form') as HTMLFormElement;
            form.submit();
            input.value = '';
            input.classList.toggle('success');
            setTimeout(() => {
                input.classList.toggle('success');
            }, 1000);
        }
    };

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <img src={logo} alt="LOGO" className="logo-footer" />
                <div className="newsletter">
                    <form data-netlify="true" method="post" name="Newsletter" id="newsletter-form" action="/src/components/Success">
                        <input type="hidden" name="form-name" value="Newsletter" />
                        <input
                            id="email-input"
                            name="emailInput"
                            className={error ? 'error' : ''}
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => {
                                handleChange(e.target.value);
                            }}
                        />
                        <button type="submit">Submit</button>
                    </form>
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
