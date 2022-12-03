import { Button, Container, createStyles, Group, Text, Title } from '@mantine/core';
import React from 'react';
import navigateToPage from '../utils/navigate';

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    inner: {
        position: 'relative',
    },

    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 0,
        opacity: 0.75,
    },

    content: {
        paddingTop: 220,
        position: 'relative',
        zIndex: 1,

        [theme.fn.smallerThan('sm')]: {
            paddingTop: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 540,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}));

const success = () => {
    const { classes } = useStyles();
    const [routeChange] = navigateToPage();

    return (
        <Container className={classes.root}>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>You are all set</Title>
                    <Text color="dimmed" size="lg" align="center" className={classes.description}>
                        Thank you for subscribing to our monthly newsletter.
                    </Text>
                    <Group position="center">
                        <Button
                            size="md"
                            variant="subtle"
                            onClick={() => routeChange('home')}
                            styles={(theme) => ({
                                root: {
                                    '&:hover': {
                                        backgroundColor: theme.fn.rgba('#d4d3d3', 0.11),
                                    },
                                },
                            })}
                        >
                            Take me back to home page
                        </Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
};
export default success;
