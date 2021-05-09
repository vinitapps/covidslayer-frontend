import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        textAlign : 'center'
    },
    commentoryBox : {
        flexGrow: 1,
        border: '2px solid #ddd',
        padding : 15 ,
        overflowY : 'scroll',
        maxHeight : 500 
    },
    commentBox : {
        paddingTop : 15,
        paddingBottom : 15
    }
  }),
);


function CommentBox(){
    const classes = useStyles();
    let points = 500 ;
    return(
        <Grid container spacing={0} className={classes.commentBox} >
            <Grid item xs={8} alignItems="center" >
                <Typography variant='overline' > 
                    Player 1 Attacks The Player 2 
                </Typography>
            </Grid>
            <Grid item xs={4} >
                <Chip color="secondary" label={points} avatar={<Avatar>+</Avatar>} />
            </Grid>
        </Grid>
    );
}


export default function CommentaryBox(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={15}>
                
                <Grid item xs={12}>
                    <Grid container spacing={0}>  
                        <div className={classes.commentoryBox}>
                            <CommentBox />
                            <CommentBox />
                            <CommentBox />
                            <CommentBox />
                            <CommentBox />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}