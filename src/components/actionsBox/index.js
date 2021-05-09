import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import store from '../../ducks/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        paddingTop : 100 , 
        paddingBottom : 100 
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


export default function ActionBox(){
    const classes = useStyles();
    return(
    
        <Grid container spacing={15} className={classes.root}>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" onClick={() => {

                    console.log(store.getState());

                }} >Attack</Button>
            </Grid>
            <Grid item xs={3} alignItems="stretch">
                <Button variant="contained" color="primary"  onClick={() => {

                    console.log( store.dispatch({ type : 'INCREMENT'}) ) ;

                }}>Blast</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" >Heal</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" >Give Up</Button>
            </Grid>
        </Grid>
    
    );
}