import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './layout/header';
import Footer from './layout/footer';
import Game from './screens/game';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      flexGrow: 1,
      padding : 15 ,
      paddingTop : 50,
      paddingBottom : 50
    }
  }),
);



function About() {
    return <h2>About</h2>;
}

  
export default function App() {
    const classes = useStyles();
    return(
        <Router>
            <Header />
            <div className={classes.body}>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Game />
                </Route>
            </Switch>
            </div>
            <Footer />
        </Router>
    );
}