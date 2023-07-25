import {Anchor, Button, createStyles, Paper, PasswordInput, rem, Text, TextInput, Title,} from '@mantine/core';
import {CheckboxCard} from "../../common/CheckboxCard";
import {NavLink} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: rem(900),
        backgroundSize: 'cover',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
        backgroundPosition: 'center center',
    },

    form: {
        borderRight: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
        }`,
        minHeight: rem(900),
        maxWidth: rem(450),
        paddingTop: rem(80),

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    marginTopCard: {
        marginTop: rem(20),

    }
}));

export function RegisterComponent() {
    const {classes} = useStyles();
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Zarabiaj lub oszczędzaj czas. <br/> Z nami to proste!
                </Title>

                <TextInput label="Imię" placeholder="Twoje imię" size="md"/>
                <TextInput label="Nazwisko" placeholder="Twoje nazwisko" mt="md" size="md"/>

                <TextInput label="Adres email" placeholder="kochamPsiaki@gmail.com" mt="md" size="md"/>
                <PasswordInput label="Password" placeholder="Twoje hasło" mt="md" size="md"/>

                <Text color="gray.3" mt="md">Musisz zaznaczyć conajmniej jedną opcję</Text>
                <CheckboxCard title={'Zostań patronem'}
                              description={'Zarabiaj na opiece nad psami. Opiekuj się nimi w domu lub na spacerze.'}
                              className={classes.marginTopCard}/>

                <CheckboxCard title={'Mam swojego pupila'} description={'Powierz go w opiekę innym i oszczędzaj czas.'}
                              className={classes.marginTopCard}/>

                <Button fullWidth mt="xl" size="md">
                    Zarejestruj się
                </Button>

                <Text ta="center" mt="md">
                    Masz już konto?{' '}
                    <Anchor weight={700}>
                        <NavLink to={'/login'}>
                            Zaloguj się
                        </NavLink>
                    </Anchor>
                </Text>
            </Paper>
        </div>
    );
}