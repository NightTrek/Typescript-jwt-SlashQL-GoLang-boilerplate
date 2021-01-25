import react, { useState } from "react";
import {Container, Grid, Typography} from "@material-ui/core"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles"

interface Props {
    children?:{}
    UserData?:{}
}

interface HomePageState {
    User?:{}
    count:number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }),
);


const HomePage = (props: Props): JSX.Element => { 
    const classes = useStyles();
    return(
    <Container>
        <Grid item container xs={12}>
            <Typography variant={'h4'}>Home Page</Typography>
        </Grid>
    </Container>)
 }


export default HomePage;