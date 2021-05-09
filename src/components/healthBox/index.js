import React from 'react';
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
        justifyContent : 'center'
    },
    commentoryBox : {
        flexGrow: 1,
        border: '2px solid #ddd',
        padding : 15 ,
        overflowY : 'scroll',
        maxHeight : 500 
    }
  }),
);


export default function HealthBox(){
    const classes = useStyles();
    let currentHealth = 60 ;
    return(
        <div className={classes.root}>
            <Grid container spacing={15}>
                <Grid item xs={2}>
                    <Avatar>VP</Avatar>
                    
                </Grid>
                <Grid item xs={6} alignItems="stretch">
                    <Typography> {currentHealth}% </Typography>
                    <LinearProgress variant="determinate" value={currentHealth} ></LinearProgress>

                </Grid>
            </Grid>
        </div>
    );
}