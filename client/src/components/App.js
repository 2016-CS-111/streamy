import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

class App extends React.Component {

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <div className='ui segment' style={{ backgroundColor: 'seagreen' }}>
                    <Router history={history}>
                        <div>
                            <Header />
                            <Switch>
                                {/* Switch is used when not to show more than one component at the same time */}
                                <Route path='/' exact component={StreamList}></Route>
                                <Route path='/stream/new' exact component={StreamCreate}></Route>
                                <Route path='/stream/delete/:id' exact component={StreamDelete}></Route>
                                <Route path='/stream/edit/:id' exact component={StreamEdit}></Route>
                                <Route path='/stream/:id' exact component={StreamShow}></Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    };
};

export default App;