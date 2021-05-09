import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor : '#fff',
      padding : 15 ,
      boxShadow : 'rgb(0 0 0 / 10%) 0px 0px 0.625rem 0px'
    },
    headerRightSection: {
      display : 'flex',
      justifyContent : 'flex-end'
    },
  }),
);



export default function Header() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Typography variant="h5" >Covid Slayer</Typography>
                </Grid>
                <Grid item xs={4} className={classes.headerRightSection} >
                    <Button variant="contained" color="primary" > Login </Button>
                </Grid>
            </Grid>
        </div>

    );
}