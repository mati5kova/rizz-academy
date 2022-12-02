import { Button, Container, createStyles, Group, Text, Title } from '@mantine/core';
import React from 'react';
import navigateToPage from '../utils/navigate';

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
        display: 'grid',
        placeItems: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        alignContent: 'center',
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
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
        color: 'darkgray',
    },
}));

const PageUnderConstruction = () => {
    const { classes } = useStyles();
    const [routeChange] = navigateToPage();

    return (
        <Container className={classes.root}>
            <Title className={classes.title}>This page is currently under construction</Title>
            <Text color="dimmed" size="lg" align="center" className={classes.description}>
                Purchasing the lessons of rizz academy will be available in the near future. Subscribe to our newsletter to be among the first to know when
                it's available.
            </Text>
            <Group position="center">
                <Button
                    variant="subtle"
                    size="md"
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
        </Container>
    );
};

export default PageUnderConstruction;
