import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerWrap: {
        flexGrow: 1,
        backgroundColor : '#F4F7FC',
        padding : 20,
        paddingTop : 50,
        paddingBottom : 50,
    },
    link : {
        color : '#333',
        textDecoration : 'none',
        fontWeight : 600
    },
    footerLogo : {
        height : 70,
        float : 'right',
        paddingBottom : 15 
    },
    footerDisclaimerLine : {
        borderTop : '1px dotted #1E306E',
        paddingTop : 30 
    }
  }),
);



export default function Footer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.footerWrap} alignItems="center" >
            <Grid item xs={6}>
                <Typography> Developed With ❤ </Typography>
                <Typography> By <Link className={classes.link} href='#'>Vinit Patil</Link> </Typography>
            </Grid>
            <Grid item xs={6} >  
                <img src='/assets/icon.png'  className={classes.footerLogo}/>
            </Grid>
            <Grid item xs={12} className={classes.footerDisclaimerLine} >
                <Typography align="center" > This has been developed as an exercise for GlobalSignIn Pte Ltd </Typography>
            </Grid>
        </Grid>
    )
}