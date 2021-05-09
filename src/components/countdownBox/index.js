import React, { useState , useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        textAlign : 'center',
        paddingBottom : 50
    }
  }),
);


export default function CountdownhBox(){
    const classes = useStyles();
    let defaultTime = 60 ;
    

    // initialize timeLeft with the seconds prop
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);

    return(
        <div className={classes.root}>

            <Grid container spacing={15} justify="center">
                <Grid item xs={6} alignItems="stretch">
                        <Typography variant='h2'> {timeLeft} </Typography>
                </Grid>
            </Grid>
        </div>
    );
}