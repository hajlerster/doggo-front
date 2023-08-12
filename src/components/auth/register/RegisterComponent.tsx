import {Anchor, Button, createStyles, Paper, PasswordInput, rem, Text, TextInput, Title,} from '@mantine/core';
import {CheckboxCard} from "../../common/CheckboxCard";
import {NavLink} from "react-router-dom";
import {useForm} from "@mantine/form";
import axios from "axios";


export function RegisterComponent() {
    const {classes} = useStyles();
    const form = useForm({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            isPatron: false,
            isOwner: false,
            password: '',
        },

        // functions will be used to validate values at corresponding key
        validate: {
            firstName: (value) => (value.length < 2 ? 'Imię musi mieć conajmniej dwa znaki' : null),
            lastName: (value) => (value.length < 2 ? 'Nazwisko musi mieć conajmniej dwa znaki' : null),
            email: (value) => (
                value && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
                    ? null : 'Niewłaściwy email'),
            password: (value) => (value.length < 6 ? 'Hasło musi mieć conajmniej 6 znaków' : null),
            isPatron: (value, allValues) => (value === true || allValues.isOwner === true ? null : 'Musisz wybrać przynajmniej jedną opcję'),
            isOwner: (value, allValues) => (value === true || allValues.isPatron === true ? null : 'Musisz wybrać przynajmniej jedną opcję'),

        },

    });

    async function handleSubmit(values: any) {
        try {

            const postData = {
                firstName: values.firstName,
                lastName: values.lastName,
                name: values.firstName + ' ' + values.lastName,
                email: values.email,
                username: values.email,
                password: values.password,
                iAmPetPatron: values.isPatron,
                iAmPetOwner: values.isOwner,
            }
            console.log(postData)
            let response = await axios.post("http://localhost:3000/api/v1/auth/register", postData);

            console.log(response.data);
            
        } catch (error) {
            // Jeżeli odpowiedź od serwera jest błędna, możesz tutaj potraktować błąd...
            console.error('Błąd:', error);
        }
    }


    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                    <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                        Zarabiaj lub oszczędzaj czas. <br/> Z nami to proste!
                    </Title>

                    <TextInput label="Imię"
                               placeholder="Twoje imię"
                               size="md"
                               name={'firstName'}
                               {...form.getInputProps('firstName')}

                    />
                    <TextInput
                        label="Nazwisko"
                        placeholder="Twoje nazwisko"
                        mt="md"
                        size="md"
                        name={'lastName'}
                        {...form.getInputProps('lastName')}
                    />

                    <TextInput
                        label="Adres email"
                        placeholder="kochamPsiaki@gmail.com"
                        mt="md"
                        size="md"
                        name={'email'}
                        {...form.getInputProps('email')}

                    />
                    <PasswordInput
                        label="Hasło"
                        placeholder="Twoje hasło"
                        mt="md"
                        size="md"
                        name={'password'}
                        {...form.getInputProps('password')}
                    />

                    <Text color="gray.3" mt="md">Musisz zaznaczyć conajmniej jedną opcję</Text>
                    <CheckboxCard title={'Zostań patronem'}
                                  description={'Zarabiaj na opiece nad psami. Opiekuj się nimi w domu lub na spacerze.'}
                                  className={classes.marginTopCard}
                                  name={'isPatron'}
                                  {...form.getInputProps('isPatron')}
                    />

                    <CheckboxCard title={'Mam swojego pupila'}
                                  description={'Powierz go w opiekę innym i oszczędzaj czas.'}
                                  className={classes.marginTopCard}
                                  name={'isOwner'}
                                  {...form.getInputProps('isOwner')}
                    />

                    <Button
                        fullWidth mt="xl"
                        size="md"
                        type="submit"
                        variant="gradient"

                    >
                        Zarejestruj się
                    </Button>
                </form>
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