import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute} from 'react-router'
import Index from './components/index'
import NavBar from './components/navbar'
import Project from './components/Project'
import Profile from './components/Profile'

ReactDOM.render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route component={NavBar} >
      <Route path='/' component={Index} />
      <Route path='/:project' component={Project} />
      <Route path='/profile/me' component={Profile} />
    </Route>
  </Router>
), document.getElementById('app'))
