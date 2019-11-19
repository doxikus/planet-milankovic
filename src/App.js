import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import MainHr from "./hr/Main";
import Home from './Home';
import MainSr from './sr/Main';
import MainEng from './eng/Main';

export default function App() {
  return (
    <Switch>      
      <Route exact path="/" component={Home} />
      <Route exact path="/hrvatski" component={MainHr} />
      <Route exact path="/srpski" component={MainSr} />
      <Route exact path="/english" component={MainEng} />
      
      
      {/* <Route path="/:id" component={UserPage} /> */}
    </Switch>
  )
}