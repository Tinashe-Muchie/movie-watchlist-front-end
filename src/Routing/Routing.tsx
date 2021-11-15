import React from 'react';
import {
    HashRouter as Router,
    Switch, 
    Route } from 'react-router-dom';
//import { Content, Footers } from './style';
import { Header } from '../Components/index';
import { Movies } from '../Pages/index';
import { TvShows } from '../Pages/index';
import { Search } from '../Pages/index';
import { Watchlist} from '../Pages/index';
import { Watched } from '../Pages/index';
import { MovieDetail } from '../Components/index';
import { TvShowDetail } from '../Components/index';
//import { Footer } from '../Components/index';

export const Routing: React.FunctionComponent = () => {
    return (
        <Router>
          <Header /> 
        <Switch>
            <Route exact path='/' component={ Movies } />
            <Route exact path='/tvshows' component={ TvShows } />
            <Route exact path='/search' component={ Search } />
            <Route exact path='/watchlist' component={ Watchlist } />
            <Route exact path='/watched' component={ Watched } />
            <Route exact path='/moviedetails' component={ MovieDetail } />
            <Route exact path='/tvshowdetails' component={ TvShowDetail } />
        </Switch> 
        </Router>
    );
}