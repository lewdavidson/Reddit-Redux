import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body/Body';
import NewPostForm from './Body/NewPostForm';


const App = () => {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Body/> } />
        <Route exact path='/newpost' render={() => <NewPostForm/> } />
      </Switch>
    </div>
  );
};

export default App;
