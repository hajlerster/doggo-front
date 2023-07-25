import {Button, Container, createStyles, Overlay, rem, Text, Title} from '@mantine/core';
import {NavLink} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1599406580992-46ab5d96f296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    container: {
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: `calc(${theme.spacing.xl} * 6)`,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            height: rem(500),
            paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        },
    },

    title: {
        color: theme.white,
        fontSize: rem(60),
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(40),
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            lineHeight: 1.3,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },

    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
        }
    },

    buttonLink: {
        ":first-child": {
            marginRight: theme.spacing.md,
        },
    }
}));

export function HeroContentLeft() {
    const {classes} = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}>Psi Patron - Bo Miłość do Psa Zobowiązuje!
                </Title>
                <Text className={classes.description} size="xl" mt="xl">
                    Twój Pies Zasługuje na Patrona. Znajdź swojego Patrona i zadbaj o swojego Psa. Usługi Online.
                </Text>

                <div className={classes.buttons}>
                    <NavLink to={'register'}>
                        <Button variant="gradient" size="xl" radius="xl"
                                className={`${classes.control} ${classes.buttonLink}`}>
                            Zarejestruj się
                        </Button>
                    </NavLink>

                    <NavLink to={'login'}>
                        <Button variant="white" size="xl" radius="xl"
                                className={`${classes.control} ${classes.buttonLink}`}>
                            Zaloguj się
                        </Button>
                    </NavLink>

                </div>

            </Container>
        </div>
    );
}