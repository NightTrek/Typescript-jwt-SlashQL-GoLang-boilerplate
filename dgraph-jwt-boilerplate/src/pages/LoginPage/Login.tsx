import react, { useState } from "react";
import { Container, Grid, Typography, TextField, Button } from "@material-ui/core"
interface Props {
    children?: {}
    UserData?: {}
}



const Login = (props: Props): JSX.Element => {

    return (
        <Container>
            <Grid item container xs={12} direction={'row'}>
                <Grid item container justify={'center'} direction={'column'}>
                    <Typography variant={'h4'}>Login to interact</Typography>
                        <TextField id="outlined-basic" label="Email or Username" variant="outlined" />
                        <TextField id="outlined-basic" label="password" variant="outlined" />
                        <Grid item container direction={'row'}>
                            <Grid item xs></Grid>
                            <Grid item xs={3}>
                                <Button variant='contained' color="primary">Login</Button>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Container>)
}


export default Login;