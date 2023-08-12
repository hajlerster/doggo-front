import {Container, createStyles, Grid, rem, useMantineTheme} from "@mantine/core";
import React from "react";


const BlankPage = (
    {children, title, content}: { children?: React.ReactNode, title?: string, content?: React.ReactNode }
) => {


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
            }
            , pageCenter: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '92vh',
                padding: rem('32px'),
                margin: rem('32px'),
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                position: "relative",
                borderRadius: rem('12px'),
                boxShadow: theme.shadows.md,
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                overflow: 'hidden',
                zIndex: 2,
                transition: 'all 0.2s ease',
                //triangle top rigth
                "::before": {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: rem('36px'),
                    height: 0,
                    borderLeft: `${rem(-36 * 6)} solid transparent`,
                    borderBottom: `${rem(36 * 3)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white}`,
                },
                "::after": {
                    content: '""',
                    position: 'absolute',
                    top: rem('-6px'),
                    right: rem('-6px'),
                    width: rem('36px'),
                    height: rem('36px'),
                    backgroundColor: theme.colors.yellow[7],
                    display: 'block',
                    zIndex: 4,
                    borderRadius: rem('4px'),
                    boxShadow: theme.shadows.md,
                    //rotate 90deg
                    transform: ('rotate(45deg) translateX(0%) translateY(-50%)'),
                    transition: 'all 0.2s ease',

                }
                ,
            }, contentTop: {

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'row',

            }, contentBottom: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                flexDirection: 'row-reverse',


            }
        })
    );
    const {classes} = useStyles();

    const theme = useMantineTheme();

    return (
        <div className={`pageOverBackground ${classes.background}`}>
            <Container style={{
                position: "relative",
                zIndex: 1,
                width: '100%',
                height: '100vh',
            }}
            >
                <Grid className={`${classes.pageCenter} ${!classes.contentTop}`}>

                    <Grid.Col xs={11} md={11} lg={10}>
                        {(
                            title && <h1 color={theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
                            }>🦴&nbsp;&nbsp;{title}</h1>
                        )}
                        {content && (
                            <p
                                color={theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white}
                            >
                                {content}

                            </p>

                        )}
                        {children}

                    </Grid.Col>

                </Grid>

            </Container>
        </div>


    );
};


export default BlankPage;



