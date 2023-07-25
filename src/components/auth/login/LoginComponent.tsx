import {
    Anchor,
    Button,
    Checkbox,
    Container,
    createStyles,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import {NavLink} from "react-router-dom";


const useStyles = createStyles((theme) => ({
    background: {
        position: 'absolute',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1596645537562-f35cf71ee459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100vh',
        padding: '0',
        margin: '0',
        "::before": {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.75)',


        }
    },

    loginBox: {
        position: 'relative',
        zIndex: 1,
    }

}));

export function LoginComponent() {
    const {classes} = useStyles();
    return (

        <div className={classes.background}>
            <Container size={420} my={40} className={classes.loginBox}>
                <Title
                    align="center"
                    color={'#fafafa'}
                    sx={(theme) => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}
                >
                    Witaj ponownie!
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Nie masz jeszcze konta?{' '}
                    <NavLink to={'/register'}>
                        <Anchor size="sm" component="button">
                            Utwórz konto
                        </Anchor>
                    </NavLink>
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Email" placeholder="psiObronca@doggo.dev" required/>
                    <PasswordInput label="Password" placeholder="Hasło" required mt="md"/>
                    <Group position="apart" mt="lg">
                        <Checkbox label="Remember me"/>
                        <Anchor component="button" size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
            </Container>
        </div>
    );
}