import React from 'react';
import Grid from '@material-ui/core/Grid';
import CommentaryBox from '../../components/commentaryBox';
import HealthBox from '../../components/healthBox';
import CountdownBox from '../../components/countdownBox';
import ActionBox from '../../components/actionsBox';
export default class Game extends React.Component{
    render(){
        return(
            <Grid container spacing={15} justify="center" >
                <Grid item xs={12}>
                    <CountdownBox />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={15}>
                        <Grid item xs={6} justify="center" >
                            <HealthBox />
                        </Grid>
                        <Grid item xs={6} justify="center" >
                            <HealthBox />
                        </Grid>
                        <Grid item xs={12} >
                            <ActionBox />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <CommentaryBox />
                </Grid>
            </Grid>
        )
    }
}